import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product }    from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  /** Endpoint base ― ajusta a tu backend */
  private apiUrl = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  /* ────────── CRUD principal ────────── */

  /** Obtener todos los productos */
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  /** Obtener un producto por ID */
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  /** Crear nuevo producto */
  createProduct(data: Partial<Product>): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, data);
  }

  /** Actualizar producto existente */
  updateProduct(id: number, data: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, data);
  }

  /** Eliminar producto */
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /* ────────── Extras / utilidades ────────── */

  /**
   * Verificar disponibilidad (stock) de un producto.
   * Ejemplo de endpoint: /products/:id/availability?quantity=2
   */
  checkProductAvailability(
    id: number,
    quantity: number = 1
  ): Observable<{ available: boolean; stock: number; message?: string }> {
    return this.http.get<{ available: boolean; stock: number; message?: string }>(
      `${this.apiUrl}/${id}/availability`,
      { params: { quantity: quantity.toString() } }
    );
  }
}
