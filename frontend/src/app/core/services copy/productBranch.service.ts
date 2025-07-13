import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoSucursalService {
  private apiUrl = environment.apiUrl;
  private controller = 'producto-sucursal';

  constructor(private http: HttpClient) {}

  /**
   * Obtener todos los registros de ProductoSucursal
   */
  obtenerTodos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${this.controller}`);
  }

  /**
   * Crear un nuevo registro de ProductoSucursal
   */
  crearProductoSucursal(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${this.controller}`, data);
  }

  /**
   * Actualizar el stock de un producto en una sucursal
   */
  actualizarProductoSucursal(productoId: number, sucursalId: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${this.controller}/${productoId}:${sucursalId}`, data);
  }

  /**
   * Eliminar un registro de ProductoSucursal
   */
  eliminarProductoSucursal(productoId: number, sucursalId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${this.controller}/${productoId}:${sucursalId}`);
  }
} 