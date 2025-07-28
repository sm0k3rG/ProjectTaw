/**
 * Componente que muestra el detalle de un pedido del usuario.
 * Obtiene la orden según el usuario y muestra su estado, dirección, productos y total.
 * Permite visualizar el estado del pedido y el resumen de los productos comprados.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { OrderService } from '../../../core/services/order.service';
import { Order } from '../../../core/models/order.interface';
import { ActivatedRoute } from '@angular/router';
import { MainNavbarComponent } from '../../../shared/main-navbar/main-navbar.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    TitleCasePipe,
    MainNavbarComponent,
  ],
  providers: [OrderService],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  order?: Order;
  estados = ['pendiente', 'activo', 'completado', 'cancelado'];

  constructor(private orderService: OrderService, private route: ActivatedRoute) {}

  /**
   * Método del ciclo de vida que se ejecuta al inicializar el componente.
   */
  ngOnInit(): void {
    // Suscribirse a los cambios de parámetros de la URL
    this.route.paramMap.subscribe(params => {
      // Extraer y convertir parámetros de la URL
      const pedidoId = Number(params.get('pedidoId'));
      const usuarioId = Number(params.get('usuarioId'));

      // Validar que los parámetros existan y sean válidos
      if (!pedidoId || !usuarioId) {
        console.error('Faltan parámetros: pedidoId o usuarioId');
        return;
      }

      // Hacer petición HTTP para obtener el pedido
      this.orderService.obtenerPedidoPropio(pedidoId, usuarioId).subscribe({
        next: (order: any) => {
          // Mapear datos del backend al modelo local
          // Se usa mapeo flexible para manejar diferentes formatos de respuesta
          this.order = {
            id: order.id,
            estado: order.estado?.toLowerCase() || '', // Normalizar estado a minúsculas
            fecha: order.fechaPedido || order.fecha || '', // Manejar diferentes nombres de campo
            direccion: order.direccion, // Para pedidos con delivery
            direccionRetiro: order.direccionRetiro, // Para pedidos con retiro en tienda
            lineasPedido: order.lineasDePedido || order.lineasPedido || [], // Manejar diferentes nombres
            total: order.total || 0 // Valor por defecto si no existe
          };
        },
        error: (err) => {
          // Manejo de errores: log del error para debugging
          console.error('Error al obtener la orden:', err);
        }
      });
    });
  }

  /**
   * Getter que calcula el total del pedido.
   * 
   * RETORNA:
   * - El total del pedido si existe
   * - 0 si no hay pedido o no tiene total
   */
  get totalPedido(): number {
    return this.order?.total || 0;
  }
}
