import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { CreateProductDto } from './dto/create-producto.dto';
import { GetProductosDto } from './dto/get-productos.dto';
import { Producto, ProductoEstado } from '@prisma/client';
import { UpdateProductoConStockDto } from './dto/update-producto-con-stock.dto';
import { NotificationsService } from 'src/notifications/notifications.service';

@Injectable()
export class ProductoService {
  constructor(private readonly prisma: PrismaService,
    private readonly notificationsService: NotificationsService,
  ) {}
  
async agregarProducto(createProductDto: CreateProductDto) {
    const { nombre, descripcion, precio, categoriaId, ofertaId, imagenUrl, sucursales } = createProductDto;
    // Validación de que el stock de cada sucursal sea mayor a 0
    for (const sucursal of sucursales) {
      if (sucursal.stock <= 0) {
        throw new BadRequestException('El stock debe ser mayor a 0');
      }
    }
    // Validación de que no exista un producto con el mismo nombre
    const existingProduct = await this.prisma.producto.findFirst({ 
      where: {
        nombre: nombre,  // Busca el primer producto con ese nombre
        },
      });
    if (existingProduct) {
      throw new BadRequestException('Ya existe un producto con el mismo nombre');
    }
    // Crear el producto
    const product = await this.prisma.producto.create({
      data: {
        nombre,
        descripcion,
        precio,
        categoriaId,
        ofertaId,
        imagenUrl,
        estado: ProductoEstado.ACTIVO
      },
    });
    // Crear las relaciones con las sucursales y asignar el stock
    const sucursalesData = sucursales.map((sucursal) => ({
      productoId: product.id,
      sucursalId: sucursal.id,
      stock: sucursal.stock,
    }));
    await this.prisma.productoSucursal.createMany({
      data: sucursalesData,
    });
    return product;
  }


async obtenerProductosConDetalles(
  page: number = 1,  // Página por defecto
  limit: number = 10,  // Límite por defecto
  // Parámetros opcionales para filtrado y ordenamiento (añadir bajo del limit)
  categoriaId?: number,
  orden?: string,
  ofertaId?: number,
) {
  const skip = (page - 1) * limit;  // Calcular el offset para la paginación

  // Construir el objeto de filtros dinámicamente
  const where: any = {};
  if (categoriaId) where.categoriaId = Number(categoriaId);
  if (ofertaId) where.ofertaId = Number(ofertaId);


  // Ordenar por nombre o precio
  let orderBy: any = undefined;
  if (orden === 'asc' || orden === 'desc') {
    orderBy = { nombre: orden };
  } else if (orden === 'precioAsc') {
    orderBy = { precio: 'asc' };
  } else if (orden === 'precioDesc') {
    orderBy = { precio: 'desc' };
  }

  // Obtener el total de productos que cumplen con los filtros
  const totalProductos = await this.prisma.producto.count({
    where,
  });

  // Calcular el número de la última página
  const totalPaginas = Math.ceil(totalProductos / limit);

  // Obtener los productos con los detalles
  const productos = await this.prisma.producto.findMany({
    skip,
    take: Number(limit),  // Paginación
    where,
    orderBy,
    include: {
      categoria: true,  // Incluir la categoría asociada
      sucursales: {
        include: {
          sucursal: true,  // Incluir los detalles de la sucursal
        },
      }, // Incluir las sucursales asociadas
    oferta:true,
    },
  });

  return {
    total: totalProductos,
    totalPaginas,  // Número total de páginas
    productos,
  };
}




  async findAll(filters: GetProductosDto) {
    const { category, priceMin, priceMax, inStock, page, limit } = filters;

    // Construcción dinámica del filtro
    const where: any = {};
    if (category) {
      // asumiendo que category viene como nombre de categoría
      where.categoria = { nombre: category };
    }
    if (priceMin !== undefined || priceMax !== undefined) {
      where.precio = {};
      if (priceMin !== undefined) where.precio.gte = priceMin;
      if (priceMax !== undefined) where.precio.lte = priceMax;
    }
    if (inStock !== undefined) {
      // filtra productos que tengan al menos 1 stock en alguna sucursal
      where.sucursales = {
        some: {
          stock: inStock ? { gt: 0 } : { equals: 0 },
        },
      };
    }

    const skip = (page - 1) * limit;
    const take = limit;

    const [items, total] = await Promise.all([
      this.prisma.producto.findMany({
        where,
        skip,
        take,
        include: { categoria: true, oferta: true, sucursales: {include:{sucursal: true}}},
      }),
      this.prisma.producto.count({ where }),
    ]);

    return {
      data: items,
      meta: {
        total,
        page,
        lastPage: Math.ceil(total / limit),
      },
    };
  }


 async eliminarProducto(id: number): Promise<Producto> {
  // 1. Validar si el producto existe
  const producto = await this.prisma.producto.findUnique({
    where: { id },
    include: { 
      sucursales: {  // Incluir las sucursales asociadas
        include: {
          sucursal: true  // Incluir la información de la sucursal
        }
      }
    },
  });

  if (!producto) {
    throw new NotFoundException('Producto no encontrado');
  }

  // 2. Validar que el producto no esté asignado a un pedido activo
  const pedidosActivos = await this.prisma.pedido.findMany({
    where: {
      estado: 'ACTIVO' ,
      lineasDePedido: {
        some: {
          productoId: id,
        },
      },
    },
  });
  if (pedidosActivos.length > 0) {
    throw new BadRequestException('El producto está asociado a un pedido activo');
  }

  // 3. Validar que el producto no tenga stock
  if (producto.sucursales.some((sucursal) => sucursal.stock > 0)) {
    throw new BadRequestException('El producto tiene stock disponible');
  }

  // 4. Actualizar el nombre del producto con un texto único antes de marcarlo como eliminado
  const nombreConTextoUnico = `${producto.nombre}_eliminado_${new Date().getTime()}`;

  // 5. Marcar el producto como eliminado (sin eliminarlo físicamente)
  return this.prisma.producto.update({
    where: { id },
    data: {
      nombre: nombreConTextoUnico, // Añadir texto único al nombre
      estado: 'ELIMINADO', // Cambiar el estado a "eliminado"
    },
  });
}
  async actualizarProductoConStock(
    
    productoId: number,
    datosProducto: UpdateProductoConStockDto['datosProducto'],
    stockPorSucursal: UpdateProductoConStockDto['stockPorSucursal'],
  ) {
    // 1. Actualizar los datos del producto
    console.log("Entro al backend del servicio")
    const productoActualizado = await this.prisma.producto.update({
      where: { id: productoId },
      data: {
        ...datosProducto, // Propiedades del producto a actualizar
      },
    });

    // 2. Actualizar el stock en todas las sucursales
    for (const { sucursalId, stock } of stockPorSucursal) {
      await this.prisma.productoSucursal.upsert({
        where: {
          productoId_sucursalId: {
            productoId,
            sucursalId,
          },
        },
        update: { stock }, // Actualizamos el stock
        create: {
          productoId,
          sucursalId,
          stock, // Si no existe la relación, la creamos
        },
      });
    }

    // 3. Comprobar si hay usuarios que visitaron el producto
    const usuarios = await this.prisma.historialVisita.findMany({
      where: { productoId: productoId },
      select: { usuario: { select: { email: true } } },
    });

    // Solo proceder a enviar correos si hay usuarios
    if (usuarios.length > 0) {
      // Enviar el correo a los usuarios que visitaron el producto
      for (const usuario of usuarios) {
        await this.notificationsService.notificarStockRepuesto(
          usuario.usuario.email,
          productoActualizado.nombre || 'Producto'
        );
      }
    }


    // Retornar el producto actualizado con sus detalles de stock
    return this.prisma.producto.findUnique({
      where: { id: productoId },
      include: {
        sucursales: true, // Incluimos las sucursales y su stock
      },
    });
}


}