import { environment } from './../../../environments/enviornment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer, CreateOfferDto } from '../models/offer.interface';
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

  crearOferta(oferta: CreateOfferDto): Observable<Offer> {
    return this.http.post<Offer>(`${this.apiUrl}/${this.controller}`, oferta);
  }

  actualizarOferta(id: number, oferta: Partial<CreateOfferDto>): Observable<Offer> {
    return this.http.patch<Offer>(`${this.apiUrl}/${this.controller}/${id}`, oferta);
  }

  eliminarOferta(id: number): Observable<{mensaje: string}> {
    return this.http.delete<{mensaje: string}>(`${this.apiUrl}/${this.controller}/${id}`);
  }

  actualizarEstadosAutomaticamente(): Observable<{mensaje: string}> {
    return this.http.post<{mensaje: string}>(`${this.apiUrl}/${this.controller}/actualizar-estados`, {});
  }
}
