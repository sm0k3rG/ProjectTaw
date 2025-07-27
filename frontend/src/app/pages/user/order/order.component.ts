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

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const pedidoId = Number(params.get('pedidoId'));
      const usuarioId = Number(params.get('usuarioId'));

      if (!pedidoId || !usuarioId) {
        console.error('Faltan parámetros: pedidoId o usuarioId');
        return;
      }

      this.orderService.obtenerPedidoPropio(pedidoId, usuarioId).subscribe({
        next: (order: any) => {
          this.order = {
            id: order.id,
            estado: order.estado?.toLowerCase() || '',
            fecha: order.fechaPedido || order.fecha || '',
            direccion: order.direccion,
            direccionRetiro: order.direccionRetiro,
            lineasPedido: order.lineasDePedido || order.lineasPedido || [],
            total: order.total || 0
          };
        },
        error: (err) => {
          console.error('Error al obtener la orden:', err);
        }
      });
    });
  }

  get totalPedido(): number {
    return this.order?.total || 0;
  }
}
