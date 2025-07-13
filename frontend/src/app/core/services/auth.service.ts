import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
    role: 'Administrator' | 'Client';
    name: string;
  };
}

export interface DecodedToken {
  id: number;
  email: string;
  role: 'Administrator' | 'Client';
  name: string;
  exp: number;
  iat: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // URL base del backend

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/auth/login`, { email, password }).pipe(
      map(response => {
        // Guardar token en localStorage
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        return response;
      }),
      catchError(error => {
        console.error('Error en login:', error);
        throw error;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
      const decoded = jwtDecode<DecodedToken>(token);
      const currentTime = Date.now() / 1000;
      return decoded.exp > currentTime;
    } catch {
      return false;
    }
  }

  getCurrentUser(): DecodedToken | null {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      return jwtDecode<DecodedToken>(token);
    } catch {
      return null;
    }
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  hasRole(role: 'Administrator' | 'Client'): boolean {
    const user = this.getCurrentUser();
    return user?.role === role;
  }

  isAdministrator(): boolean {
    return this.hasRole('Administrator');
  }

  isClient(): boolean {
    return this.hasRole('Client');
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, data);
  }

  solicitarRecuperacionContraseña(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/forgot-password`, { email }).pipe(
      catchError(error => {
        console.error('Error en solicitud de recuperación:', error);
        throw error;
      })
    );
  }

  restablecerContraseña(token: string, nuevaContraseña: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/reset-password`, {
      token,
      password: nuevaContraseña
    }).pipe(
      catchError(error => {
        console.error('Error en restablecimiento de contraseña:', error);
        throw error;
      })
    );
  }
}
