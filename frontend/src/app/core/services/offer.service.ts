import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Offer } from '../models/offer.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private apiUrl = environment.apiUrl;
  private controller = 'ofertas';

  constructor(private http: HttpClient) { }

  obtenerOfertas(): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.apiUrl}/${this.controller}`);
  }

  eliminarOferta(id: number): Observable<{mensaje: string}> {
    return this.http.delete<{mensaje: string}>(`${this.apiUrl}/${this.controller}/${id}`);
  }
}
