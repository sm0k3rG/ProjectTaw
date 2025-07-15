import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  obtenerProductos(pagina: number = 1, tamanoPagina: number = 2, categoriaId?: number, orden?: string): Observable<{ total: number, totalPaginas: number, productos: Product[] }> {
    let params = new HttpParams()
      .set('page', pagina.toString())
      .set('limit', tamanoPagina.toString());
      
    if (categoriaId) {
      params = params.set('categoriaId', categoriaId.toString());
    }
    if (orden) {
      params = params.set('orden', orden);
    }
    return this.http.get<{ total: number, totalPaginas: number, productos: Product[] }>(`${this.apiUrl}/${this.controller}/registrados`, { params });
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${this.controller}/${id}`);
  }

  agregarProducto(producto: any): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/${this.controller}`, producto);
  }

  agregarStockSucursal(stockData: {
    productoId: number;
    sucursalId: number;
    stock: number;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/producto-sucursal`, stockData);
  }


}