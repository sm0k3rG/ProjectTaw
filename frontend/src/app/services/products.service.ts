import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // Obtener todos los productos
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  // Obtener producto por ID
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  // Verificar disponibilidad de producto
  checkProductAvailability(productId: number, quantity: number = 1): Observable<{ available: boolean; stock: number; message?: string }> {
    return this.http.get<{ available: boolean; stock: number; message?: string }>(`${this.apiUrl}/products/${productId}/availability`, {
      params: { quantity: quantity.toString() }
    });
  }
}
