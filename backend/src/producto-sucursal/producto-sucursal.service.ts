// src/producto-sucursal/producto-sucursal.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductoSucursalDto } from './dto/create-producto-sucursal.dto';
import { UpdateProductoSucursalDto } from './dto/update-producto-sucursal.dto';
import { HistorialVisita, ProductoSucursal } from '@prisma/client';
import { NotificationsGateway } from 'src/notifications/notifications.gateway';
import { NotificationsService } from 'src/notifications/notifications.service';

@Injectable()
export class ProductoSucursalService {
  constructor(private prisma: PrismaService,
    private readonly notificationsService: NotificationsService,
    private readonly notificationsGateway: NotificationsGateway,) {}
    
   async registrarVisita(usuarioId: number, productoId: number,): Promise<HistorialVisita> {
    return this.prisma.historialVisita.upsert({
      where: {
        usuarioId_productoId: { usuarioId, productoId },
      },
      create: {
        usuarioId,
        productoId,
        // fecha se pone por defecto con @default(now())
      },
      update: {
        // No actualizamos nada si ya existía; podrías refrescar la fecha así:
        // fecha: new Date(),
      },
    });
  }


   async actualizarNotificarStock(productoId: number, sucursalId: number, stockNuevo: number): Promise<void> {
    // Actualizamos el stock del producto en la sucursal
    const productoSucursal = await this.prisma.productoSucursal.update({
      where: {
        productoId_sucursalId: {
          productoId,
          sucursalId,
        },
      },
      data: {
        stock: stockNuevo,
      },
    });

    // Si el stock es repuesto (por ejemplo, si el stock es mayor que cero), notificamos
    if (productoSucursal.stock > 0) {
      const producto = await this.prisma.producto.findUnique({
        where: { id: productoId },
        select: { nombre: true },
      });

    if(producto != null){
      // Notificar a través de WebSocket (notificación en tiempo real)
      this.notificationsGateway.emitirNotificacion(sucursalId, producto.nombre);}

      // Enviar un correo electrónico al usuario
      const usuarios = await this.prisma.historialVisita.findMany({
        where: { productoId: productoId },
        select: { usuario: { select: { email: true } } },
      });

      // Enviar el correo a los usuarios que visitaron el producto
      for (const usuario of usuarios) {
        await this.notificationsService.enviarCorreo(usuario.usuario.email, producto?.nombre || 'Producto');
      }
    }
  }

  // Crear un nuevo registro de ProductoSucursal
  async create(
    createProductoSucursalDto: CreateProductoSucursalDto,
  ): Promise<ProductoSucursal> {
    return this.prisma.productoSucursal.create({
      data: createProductoSucursalDto,
    });
  }

  // Obtener todos los registros de ProductoSucursal
  async findAll(): Promise<ProductoSucursal[]> {
    return this.prisma.productoSucursal.findMany();
  }

  // Obtener un ProductoSucursal por sus ids
  async findOne(
    productoId: number,
    sucursalId: number,
  ): Promise<ProductoSucursal | null> {
    return this.prisma.productoSucursal.findUnique({
      where: {
        productoId_sucursalId: {
          productoId,
          sucursalId,
        },
      },
    });
  }

  // Actualizar el stock de un ProductoSucursal
   async update(
    productoId: number,
    sucursalId: number,
    updateDto: UpdateProductoSucursalDto,
  ): Promise<ProductoSucursal> {
    // Verificar si el producto existe
    const producto = await this.prisma.producto.findUnique({
      where: { id: productoId },
    });

    if (!producto) {
      throw new NotFoundException(`Producto con ID ${productoId} no encontrado.`);
    }

    // Verificar si la sucursal existe
    const sucursal = await this.prisma.sucursal.findUnique({
      where: { id: sucursalId },
    });

    if (!sucursal) {
      throw new NotFoundException(`Sucursal con ID ${sucursalId} no encontrada.`);
    }

    // Si ambos existen, realizar la actualización
    return this.prisma.productoSucursal.update({
      where: {
        productoId_sucursalId: {
          productoId,
          sucursalId,
        },
      },
      data: updateDto,
    });
  }

  // Eliminar un ProductoSucursal
  async remove(
    productoId: number,
    sucursalId: number,
  ): Promise<ProductoSucursal> {
    return this.prisma.productoSucursal.delete({
      where: {
        productoId_sucursalId: {
          productoId,
          sucursalId,
        },
      },
    });
  }
  // Definir un tipo para los objetos que estás guardando en el array


async predecirReposicionStockPorSucursal(productoId: number, sucursalId: number): Promise<any[]> {
  const prediccionesPorSucursal: any[] = []; // Define el tipo del array

  // Obtener las ventas del producto en la sucursal específica
  const ventas = await this.prisma.lineaDePedido.findMany({
    where: {
      productoId,
      producto: {
        sucursales: {
          some: {
            sucursalId,
          },
        },
      },
    },
    select: {
      cantidad: true,
      pedido: {
        select: {
          fechaPedido: true,
        },
      },
    },
  });

  // Filtrar ventas recientes (por ejemplo, en los últimos 30 días)
  const fechaLimite = new Date();
  fechaLimite.setDate(fechaLimite.getDate() - 30);

  const ventasRecientes = ventas.filter((venta) => {
    return venta.pedido.fechaPedido >= fechaLimite;
  });

  // Calcular la demanda promedio diaria para esta sucursal
  const totalCantidadVendida = ventasRecientes.reduce((sum, venta) => sum + venta.cantidad, 0);
  const diasVentas = Math.max(1, ventasRecientes.length);  // Evitar división por cero
  const demandaPromedioDiaria = totalCantidadVendida / diasVentas;

  // Obtener el stock actual en la sucursal
  const productoSucursal = await this.prisma.productoSucursal.findUnique({
    where: {
      productoId_sucursalId: {
        productoId, 
        sucursalId,
      },
    },
    select: {
      stock: true,
    },
  });

  const stockActual = productoSucursal?.stock ?? 0;

  // Predecir el tiempo de reposición basándonos en la demanda promedio y el stock en la sucursal
  const tiempoReposicion = stockActual / demandaPromedioDiaria;

  // Almacenar la predicción para esta sucursal
  prediccionesPorSucursal.push({
    sucursalId,
    stock: stockActual,
    demandaPromedioDiaria,
    tiempoReposicion,
  });

  return prediccionesPorSucursal; // Devuelve las predicciones por sucursal
}


}
