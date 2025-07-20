import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DeliveryAddress {
  id?: number;
  direccion: string;
  numero: string;
  depto?: string;
  region: string;
  comuna: string;
  referencias?: string;
  userId?: number;
}

export interface DeliveryType {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private apiUrl = 'http://localhost:3000/api'; // Ajustar según tu backend

  constructor(private http: HttpClient) { }

  // Obtener tipos de delivery disponibles
  getDeliveryTypes(): Observable<DeliveryType[]> {
    return this.http.get<DeliveryType[]>(`${this.apiUrl}/delivery-types`);
  }

  // Guardar dirección de delivery
  saveDeliveryAddress(address: DeliveryAddress): Observable<DeliveryAddress> {
    return this.http.post<DeliveryAddress>(`${this.apiUrl}/delivery-addresses`, address);
  }

  // Obtener direcciones guardadas del usuario
  getUserDeliveryAddresses(userId: number): Observable<DeliveryAddress[]> {
    return this.http.get<DeliveryAddress[]>(`${this.apiUrl}/delivery-addresses/user/${userId}`);
  }

  // Actualizar dirección de delivery
  updateDeliveryAddress(id: number, address: DeliveryAddress): Observable<DeliveryAddress> {
    return this.http.put<DeliveryAddress>(`${this.apiUrl}/delivery-addresses/${id}`, address);
  }

  // Eliminar dirección de delivery
  deleteDeliveryAddress(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delivery-addresses/${id}`);
  }

  // Calcular costo de delivery
  calculateDeliveryCost(address: DeliveryAddress): Observable<{ cost: number; estimatedTime: string }> {
    return this.http.post<{ cost: number; estimatedTime: string }>(`${this.apiUrl}/delivery/calculate-cost`, address);
  }

  // Verificar disponibilidad de delivery en la zona
  checkDeliveryAvailability(address: DeliveryAddress): Observable<{ available: boolean; message?: string }> {
    return this.http.post<{ available: boolean; message?: string }>(`${this.apiUrl}/delivery/check-availability`, address);
  }
}
