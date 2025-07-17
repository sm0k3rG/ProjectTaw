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

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, DatePipe, TitleCasePipe],
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
      const usuarioId = Number(params.get('usuarioId'));
      console.log('usuarioId:', usuarioId);
      if (!usuarioId) return;
      this.orderService.obtenerOrdenPorUsuarioId(usuarioId).subscribe({
        next: (orders: any) => {
          // Si es un array, tomar el primer pedido
          const order = Array.isArray(orders) ? orders[0] : orders;
          console.log('Order recibido:', order);
          this.order = {
            id: order.id,
            estado: order.estado?.toLowerCase() || '',
            fecha: order.fechaPedido || order.fecha || '',
            direccion: order.direccion,
            lineasPedido: order.lineasDePedido || order.lineasPedido || [],
            total: order.lineasDePedido?.reduce((acc: number, l: any) => acc + (l.total || (l.cantidad * l.precioUnitario)), 0) || 0
          };
          console.log('Dirección recibida:', this.order?.direccion);
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
