import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl;
  private controller = 'producto'; // Cambia la URL según tu backend

  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/${this.controller}/detalles`);
  }

  

}