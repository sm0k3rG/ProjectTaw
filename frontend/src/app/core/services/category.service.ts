import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = environment.apiUrl;
  private controller = 'categoria'; // Cambia la URL según tu backend

  constructor(private http: HttpClient) { }

  obtenerCategorias(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/${this.controller}`);
  }

  agregarCategoria(categoria: Partial<Category>): Observable<Category> {
    return this.http.post<Category>(`${this.apiUrl}/${this.controller}`, categoria);
  }

  eliminarCategoria(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${this.controller}/${id}`);
  }
  
  actualizarCategoria(id: number, categoria: Partial<Category>): Observable<Category> {
    return this.http.patch<Category>(`${this.apiUrl}/${this.controller}/${id}`, categoria);
  }
  

}
