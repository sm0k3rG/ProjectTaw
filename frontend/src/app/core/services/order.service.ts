import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Obtener pedido específico por ID y usuario
  obtenerPedidoPropio(pedidoId: number, usuarioId: number): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}/pedidos/${pedidoId}/propio`, {
      usuarioId
    });
  }

  // Obtener todos los pedidos de un usuario
  obtenerPedidosPorUsuario(usuarioId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/pedidos/registrados`);
  }

  getHistorialPedidos(): Observable<any[]> {
    console.log("entro al servicio")
  return this.http.get<any[]>(`${this.apiUrl}/pedidos/historial`);
  } 


  // Crear un nuevo pedido
  crearPedido(pedidoData: any): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}/pedidos`, pedidoData);
  }

  // Cancelar pedido propio
  cancelarPedidoPropio(pedidoId: number, usuarioId: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/pedidos/${pedidoId}/cancelar/propio`, {
      usuarioId
    });
  }

  // Método para compatibilidad con payment component
  obtenerOrdenPorUsuarioId(usuarioId: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/pedidos/registrados`);
  }
}
