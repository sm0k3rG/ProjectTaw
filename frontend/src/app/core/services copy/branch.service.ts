import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Branch } from '../models/branch.interface';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private apiUrl = environment.apiUrl;
  private controller = 'sucursales';

  constructor(private http: HttpClient) { }

  obtenerSucursal(): Observable<Branch[]> {
    return this.http.get<Branch[]>(`${this.apiUrl}/${this.controller}`);
  }
}
