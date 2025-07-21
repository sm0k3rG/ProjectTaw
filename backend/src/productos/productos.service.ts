import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { CreateProductDto } from './dto/create-producto.dto';
import { GetProductosDto } from './dto/get-productos.dto';
import { Producto, ProductoEstado } from '@prisma/client';

@Injectable()
export class ProductoService {
  constructor(private readonly prisma: PrismaService) {}
  
async create(createProductDto: CreateProductDto) {
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
) {
  const skip = (page - 1) * limit;  // Calcular el offset para la paginación

  // Construir el objeto de filtros dinámicamente
  const where: any = {};
  if (categoriaId) where.categoriaId = Number(categoriaId);

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
    take: limit,  // Paginación
    where,
    orderBy,
    include: {
      categoria: true,  // Incluir la categoría asociada
      sucursales: {
        include: {
          sucursal: true,  // Incluir los detalles de la sucursal
        },
      }, // Incluir las sucursales asociadas
    oferta:true
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

}
