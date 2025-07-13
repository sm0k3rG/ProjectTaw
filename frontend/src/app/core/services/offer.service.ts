import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
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
}
