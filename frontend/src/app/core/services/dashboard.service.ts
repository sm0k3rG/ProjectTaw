import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProductoVentas {
  producto: string;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl = 'http://localhost:3000/estadisticas';

  constructor(private http: HttpClient) {}

  getProductosMasVendidos(): Observable<ProductoVentas[]> {
    return this.http.get<ProductoVentas[]>(`${this.baseUrl}/productos-mas-vendidos`);
  }

  getProductosMenosVendidos(): Observable<ProductoVentas[]> {
    return this.http.get<ProductoVentas[]>(`${this.baseUrl}/productos-menos-vendidos`);
  }
}