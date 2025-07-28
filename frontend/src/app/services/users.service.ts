import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

/* ——— INTERFACES —————————— */
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'ADMIN' | 'CLIENT' | 'BODEGUERO' | string;
  active: boolean;
}

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  phone?: string;
  role: string;
  registeredAt: string;
  lastLogin: string;
  ordersCount: number;
  points: number;
  /* campos adicionales */
  altPhone?: string;
  secondaryAddress?: string;
  deliveryPrefs?: string;
}

/* ——— SERVICIO —————————— */
@Injectable({ providedIn: 'root' })
export class UsersService {
  private api = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  /* CRUD de usuario (admin) ------------- */
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.api);
  }
  getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.api}/${id}`);
  }
  create(data: Partial<User>): Observable<User> {
    return this.http.post<User>(this.api, data);
  }
  update(id: number, data: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.api}/${id}`, data);
  }
  deactivate(id: number): Observable<void> {
    return this.http.patch<void>(`${this.api}/${id}/deactivate`, {});
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }

  /* Perfil del usuario autenticado ------- */
  getProfile(): Observable<UserProfile> {
    /* En producción usa:
       return this.http.get<UserProfile>(`${this.api}/me`);
       Mientras tanto, devolvemos un mock: */
    return of({
      id: 42,
      name: 'Juan Pérez',
      email: 'juan@ejemplo.com',
      phone: '+56 9 1234 5678',
      role: 'CLIENT',
      registeredAt: '2023-01-15',
      lastLogin: '2023-07-20',
      ordersCount: 12,
      points: 350,
      altPhone: '',
      secondaryAddress: '',
      deliveryPrefs: ''
    });
  }

  updateProfile(data: Partial<UserProfile>): Observable<UserProfile> {
    /* Producción: return this.http.put<UserProfile>(`${this.api}/me`, data); */
    return of({ ...data } as UserProfile);
  }
}
