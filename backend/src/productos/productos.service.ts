import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { CreateProductDto } from './dto/create-producto.dto';

@Injectable()
export class ProductoService {
  constructor(private readonly prisma: PrismaService) {}
  
async create(createProductDto: CreateProductDto) {
    const { nombre, descripcion, precio, categoriaId, ofertaId, imagenUrl, sucursales } = createProductDto;

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



  async findAll() {
    return await this.prisma.producto.findMany();
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
