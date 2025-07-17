import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  obtenerOrdenPorUsuarioId(usuarioId: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/pedido/${usuarioId}`);
  }
} 