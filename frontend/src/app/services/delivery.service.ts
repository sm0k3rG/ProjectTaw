import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthService } from '../core/services/auth.service';


export interface DeliveryAddress {
  id: number;
  calle: string;
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
  private apiUrl = 'http://localhost:3000';
  private currentAddressSubject = new BehaviorSubject<DeliveryAddress | null>(null);
  private userAddressesSubject = new BehaviorSubject<DeliveryAddress[]>([]);

  // Exponer como Observables
  currentAddress$ = this.currentAddressSubject.asObservable();
  userAddresses$ = this.userAddressesSubject.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) {
    this.loadInitialData();
  }

  private loadInitialData(): void {
    // Cargar dirección actual del localStorage
    const savedAddress = localStorage.getItem('currentDeliveryAddress');
    if (savedAddress) {
      this.currentAddressSubject.next(JSON.parse(savedAddress));
    }

    // Cargar direcciones del usuario si está autenticado
    if (this.authService.isAuthenticated()) {
      this.loadUserAddresses();
    }
  }

  // Cargar direcciones del usuario
  loadUserAddresses(): void {
  const user = this.authService.getCurrentUser();
  console.log('Usuario actual:', user);
  const userId = user?.userId;
  console.log('User ID usado para cargar direcciones:', userId);

  if (userId) {
    this.getUserDeliveryAddresses(userId).subscribe({
      next: (addresses) => {
        console.log('Direcciones obtenidas del backend:', addresses);
        this.userAddressesSubject.next(addresses);
      },
      error: (error) => {
        console.error('Error al cargar direcciones del usuario:', error);
      }
    });
  }
}


  saveDeliveryAddress(address: DeliveryAddress): Observable<DeliveryAddress> {
    console.log(address)
  const operation = address.id
    ? this.updateDeliveryAddress(address.id, address)
    : this.http.post<DeliveryAddress>(`${this.apiUrl}/direcciones`, address);

  return operation.pipe(
    tap(savedAddress => {
      this.currentAddressSubject.next(savedAddress);
      localStorage.setItem('currentDeliveryAddress', JSON.stringify(savedAddress));

      if (this.authService.isAuthenticated()) {
        this.loadUserAddresses();
      }
    })
  );
}


  // Obtener direcciones del usuario
  getUserDeliveryAddresses(userId: number): Observable<DeliveryAddress[]> {
  return this.http.get<DeliveryAddress[]>(`${this.apiUrl}/direcciones/usuario/${userId}`);
}


  // Actualizar dirección
  updateDeliveryAddress(id: number, address: DeliveryAddress): Observable<DeliveryAddress> {
    return this.http.put<DeliveryAddress>(`${this.apiUrl}/delivery-addresses/${id}`, address);
  }

  // Eliminar dirección
  deleteDeliveryAddress(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delivery-addresses/${id}`).pipe(
      tap(() => {
        // Actualizar lista después de eliminar
        if (this.authService.isAuthenticated()) {
          this.loadUserAddresses();
        }
      })
    );
  }

  // Establecer dirección actual
  setCurrentAddress(address: DeliveryAddress): void {
    this.currentAddressSubject.next(address);
    localStorage.setItem('currentDeliveryAddress', JSON.stringify(address));
  }

  // Obtener dirección actual directamente
  getCurrentAddress(): DeliveryAddress | null {
    return this.currentAddressSubject.value;
  }

}
