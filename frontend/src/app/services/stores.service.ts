import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Store {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  latitude: number;
  longitude: number;
  isActive: boolean;
  region: string;
  comuna: string;
}

export interface StoreWithDistance extends Store {
  distance?: number;
}

export interface StoreSearchParams {
  region?: string;
  comuna?: string;
  searchTerm?: string;
  userLat?: number;
  userLng?: number;
  radius?: number;
}

export interface StoreAvailability {
  storeId: number;
  isOpen: boolean;
  currentTime: string;
  nextOpeningTime?: string;
  estimatedWaitTime?: number;
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

  // Obtener tiendas con filtros
  getStoresWithFilters(params: StoreSearchParams): Observable<StoreWithDistance[]> {
    return this.http.get<StoreWithDistance[]>(`${this.apiUrl}/stores/search`, { params: params as any });
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

  // Obtener disponibilidad de una tienda
  getStoreAvailability(storeId: number): Observable<StoreAvailability> {
    return this.http.get<StoreAvailability>(`${this.apiUrl}/stores/${storeId}/availability`);
  }

  // Obtener horarios de una tienda
  getStoreHours(storeId: number): Observable<{ day: string; open: string; close: string; isOpen: boolean }[]> {
    return this.http.get<{ day: string; open: string; close: string; isOpen: boolean }[]>(`${this.apiUrl}/stores/${storeId}/hours`);
  }

  // Obtener información de contacto de una tienda
  getStoreContact(storeId: number): Observable<{ phone: string; email: string; manager: string }> {
    return this.http.get<{ phone: string; email: string; manager: string }>(`${this.apiUrl}/stores/${storeId}/contact`);
  }

  // Obtener servicios disponibles en una tienda
  getStoreServices(storeId: number): Observable<{ id: number; name: string; description: string; available: boolean }[]> {
    return this.http.get<{ id: number; name: string; description: string; available: boolean }[]>(`${this.apiUrl}/stores/${storeId}/services`);
  }

  // Obtener productos disponibles en una tienda
  getStoreProducts(storeId: number): Observable<{ id: number; name: string; category: string; available: boolean }[]> {
    return this.http.get<{ id: number; name: string; category: string; available: boolean }[]>(`${this.apiUrl}/stores/${storeId}/products`);
  }

  // Calcular ruta a una tienda
  getRouteToStore(storeId: number, userLat: number, userLng: number): Observable<{ distance: number; duration: number; route: any }> {
    return this.http.get<{ distance: number; duration: number; route: any }>(`${this.apiUrl}/stores/${storeId}/route`, {
      params: { userLat: userLat.toString(), userLng: userLng.toString() }
    });
  }

  // Obtener tiendas favoritas del usuario
  getUserFavoriteStores(userId: number): Observable<Store[]> {
    return this.http.get<Store[]>(`${this.apiUrl}/stores/favorites/${userId}`);
  }

  // Agregar tienda a favoritos
  addToFavorites(userId: number, storeId: number): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${this.apiUrl}/stores/favorites`, {
      userId,
      storeId
    });
  }

  // Remover tienda de favoritos
  removeFromFavorites(userId: number, storeId: number): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(`${this.apiUrl}/stores/favorites/${userId}/${storeId}`);
  }

  // Obtener estadísticas de tiendas
  getStoreStats(): Observable<{ totalStores: number; activeStores: number; regions: string[] }> {
    return this.http.get<{ totalStores: number; activeStores: number; regions: string[] }>(`${this.apiUrl}/stores/stats`);
  }
}
