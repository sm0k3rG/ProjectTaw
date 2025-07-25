import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Store {
  id: number;
  name: string;
  address: string;
  region: string;
  city: string;
}

export interface StoreWithDistance extends Store {
  distance?: number;
}


@Injectable({
  providedIn: 'root'
})
export class StoresService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // Obtener todas las tiendas
  getAllStores(): Observable<Store[]> {
    return this.http.get<Store[]>(`${this.apiUrl}/stores`);
  }

  // Obtener tienda por ID
  getStoreById(id: number): Observable<Store> {
    return this.http.get<Store>(`${this.apiUrl}/stores/${id}`);
  }

  // Obtener tiendas por región
  getStoresByRegion(region: string): Observable<Store[]> {
    return this.http.get<Store[]>(`${this.apiUrl}/stores/region/${region}`);
  }

  // Obtener tiendas por comuna
  getStoresByComuna(comuna: string): Observable<Store[]> {
    return this.http.get<Store[]>(`${this.apiUrl}/stores/comuna/${comuna}`);
  }

  // Obtener tiendas cercanas
  getNearbyStores(lat: number, lng: number, radius: number = 10): Observable<StoreWithDistance[]> {
    return this.http.get<StoreWithDistance[]>(`${this.apiUrl}/stores/nearby`, {
      params: { lat: lat.toString(), lng: lng.toString(), radius: radius.toString() }
    });
  }

  // Calcular ruta a una tienda
  getRouteToStore(storeId: number, userLat: number, userLng: number): Observable<{ distance: number; duration: number; route: any }> {
    return this.http.get<{ distance: number; duration: number; route: any }>(`${this.apiUrl}/stores/${storeId}/route`, {
      params: { userLat: userLat.toString(), userLng: userLng.toString() }
    });
  }
}
