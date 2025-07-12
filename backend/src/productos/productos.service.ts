import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { CreateProductDto } from './dto/create-producto.dto';
import { GetProductosDto } from './dto/get-productos.dto';

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
  ) {
    const skip = (page - 1) * limit;  // Calcular el offset para la paginación

    return this.prisma.producto.findMany({
      skip,
      take: limit,  // Paginación
      include: {
        categoria: true,  // Incluir la categoría asociada
        sucursales: true, // Incluir las sucursales asociadas
      },
    });
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
        include: { categoria: true, oferta: true, sucursales: true },
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

  async findOne(id: number) {
    return await this.prisma.producto.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    return await this.prisma.producto.update({
      where: { id },
      data: updateProductoDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.producto.delete({
      where: { id },
    });
  }
}
