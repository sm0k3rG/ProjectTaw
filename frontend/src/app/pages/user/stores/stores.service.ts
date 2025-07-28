import { StoreWithDistance } from './../../../models/store.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Store {
  id: number;
  name: string;
  address: string;
  city: string;
  region: string;
}

@Injectable({ providedIn: 'root' })
export class StoresService {
  private apiUrl = 'http://localhost:3000/sucursales/';

  constructor(private http: HttpClient) {}

  getStores(): Observable<StoreWithDistance[]> {
    return this.http.get<StoreWithDistance[]>(this.apiUrl);
  }

  getNearestStore(userLocation: { city: string; region: string }, stores: Store[]): Store | null {
    const nearest = stores.find(
      store =>
        store.city.toLowerCase() === userLocation.city.toLowerCase() &&
        store.region.toLowerCase() === userLocation.region.toLowerCase()
    );
    return nearest || null;
  }
}
