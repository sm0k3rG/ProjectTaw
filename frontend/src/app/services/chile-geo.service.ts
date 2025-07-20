import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Region {
  id: number;
  nombre: string;
  codigo: string;
}

export interface Comuna {
  id: number;
  nombre: string;
  codigo: string;
  region_id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ChileGeoService {
  private baseUrl = 'https://apis.digital.gob.cl/fl/feriados/api/v3';

  // Datos de fallback para regiones de Chile
  private regionesFallback: Region[] = [
    { id: 1, nombre: 'Arica y Parinacota', codigo: '15' },
    { id: 2, nombre: 'Tarapacá', codigo: '01' },
    { id: 3, nombre: 'Antofagasta', codigo: '02' },
    { id: 4, nombre: 'Atacama', codigo: '03' },
    { id: 5, nombre: 'Coquimbo', codigo: '04' },
    { id: 6, nombre: 'Valparaíso', codigo: '05' },
    { id: 7, nombre: 'Región Metropolitana de Santiago', codigo: '13' },
    { id: 8, nombre: 'Libertador General Bernardo O\'Higgins', codigo: '06' },
    { id: 9, nombre: 'Maule', codigo: '07' },
    { id: 10, nombre: 'Ñuble', codigo: '16' },
    { id: 11, nombre: 'Biobío', codigo: '08' },
    { id: 12, nombre: 'La Araucanía', codigo: '09' },
    { id: 13, nombre: 'Los Ríos', codigo: '14' },
    { id: 14, nombre: 'Los Lagos', codigo: '10' },
    { id: 15, nombre: 'Aysén del General Carlos Ibáñez del Campo', codigo: '11' },
    { id: 16, nombre: 'Magallanes y de la Antártica Chilena', codigo: '12' }
  ];

  // Datos de fallback para comunas (solo algunas principales)
  private comunasFallback: Comuna[] = [
    // Arica y Parinacota
    { id: 1, nombre: 'Arica', codigo: '15101', region_id: 1 },
    { id: 2, nombre: 'Camarones', codigo: '15102', region_id: 1 },
    { id: 3, nombre: 'Putre', codigo: '15201', region_id: 1 },
    { id: 4, nombre: 'General Lagos', codigo: '15202', region_id: 1 },

    // Tarapacá
    { id: 5, nombre: 'Iquique', codigo: '01101', region_id: 2 },
    { id: 6, nombre: 'Alto Hospicio', codigo: '01107', region_id: 2 },
    { id: 7, nombre: 'Pozo Almonte', codigo: '01401', region_id: 2 },
    { id: 8, nombre: 'Camiña', codigo: '01402', region_id: 2 },

    // Antofagasta
    { id: 9, nombre: 'Antofagasta', codigo: '02101', region_id: 3 },
    { id: 10, nombre: 'Mejillones', codigo: '02102', region_id: 3 },
    { id: 11, nombre: 'Sierra Gorda', codigo: '02103', region_id: 3 },
    { id: 12, nombre: 'Taltal', codigo: '02104', region_id: 3 },

    // Región Metropolitana
    { id: 13, nombre: 'Santiago', codigo: '13101', region_id: 7 },
    { id: 14, nombre: 'Providencia', codigo: '13123', region_id: 7 },
    { id: 15, nombre: 'Las Condes', codigo: '13114', region_id: 7 },
    { id: 16, nombre: 'Ñuñoa', codigo: '13120', region_id: 7 },
    { id: 17, nombre: 'Maipú', codigo: '13119', region_id: 7 },
    { id: 18, nombre: 'Puente Alto', codigo: '13201', region_id: 7 },
    { id: 19, nombre: 'San Bernardo', codigo: '13401', region_id: 7 },
    { id: 20, nombre: 'La Florida', codigo: '13110', region_id: 7 },
    { id: 21, nombre: 'Recoleta', codigo: '13122', region_id: 7 },
    { id: 22, nombre: 'Independencia', codigo: '13107', region_id: 7 },
    { id: 23, nombre: 'Estación Central', codigo: '13106', region_id: 7 },
    { id: 24, nombre: 'Cerrillos', codigo: '13102', region_id: 7 },
    { id: 25, nombre: 'Lo Prado', codigo: '13117', region_id: 7 },
    { id: 26, nombre: 'Quilicura', codigo: '13121', region_id: 7 },
    { id: 27, nombre: 'Huechuraba', codigo: '13108', region_id: 7 },
    { id: 28, nombre: 'Conchalí', codigo: '13104', region_id: 7 },
    { id: 29, nombre: 'Renca', codigo: '13124', region_id: 7 },
    { id: 30, nombre: 'Cerro Navia', codigo: '13103', region_id: 7 },
    { id: 31, nombre: 'Lo Espejo', codigo: '13112', region_id: 7 },
    { id: 32, nombre: 'Pedro Aguirre Cerda', codigo: '13125', region_id: 7 },
    { id: 33, nombre: 'San Miguel', codigo: '13126', region_id: 7 },
    { id: 34, nombre: 'San Joaquín', codigo: '13127', region_id: 7 },
    { id: 35, nombre: 'La Granja', codigo: '13109', region_id: 7 },
    { id: 36, nombre: 'La Pintana', codigo: '13111', region_id: 7 },
    { id: 37, nombre: 'El Bosque', codigo: '13105', region_id: 7 },
    { id: 38, nombre: 'La Cisterna', codigo: '13113', region_id: 7 },
    { id: 39, nombre: 'San Ramón', codigo: '13128', region_id: 7 },
    { id: 40, nombre: 'Lo Barnechea', codigo: '13115', region_id: 7 },
    { id: 41, nombre: 'Vitacura', codigo: '13129', region_id: 7 },
    { id: 42, nombre: 'Peñalolén', codigo: '13116', region_id: 7 },
    { id: 43, nombre: 'Macul', codigo: '13118', region_id: 7 },
    { id: 44, nombre: 'Pudahuel', codigo: '13130', region_id: 7 },
    { id: 45, nombre: 'Quinta Normal', codigo: '13131', region_id: 7 },
    { id: 46, nombre: 'Peñaflor', codigo: '13501', region_id: 7 },
    { id: 47, nombre: 'Talagante', codigo: '13502', region_id: 7 },
    { id: 48, nombre: 'Isla de Maipo', codigo: '13503', region_id: 7 },
    { id: 49, nombre: 'El Monte', codigo: '13504', region_id: 7 },
    { id: 50, nombre: 'Padre Hurtado', codigo: '13505', region_id: 7 },
    { id: 51, nombre: 'Pirque', codigo: '13202', region_id: 7 },
    { id: 52, nombre: 'San José de Maipo', codigo: '13203', region_id: 7 },
    { id: 53, nombre: 'Buin', codigo: '13402', region_id: 7 },
    { id: 54, nombre: 'Calera de Tango', codigo: '13403', region_id: 7 },
    { id: 55, nombre: 'Paine', codigo: '13404', region_id: 7 },
    { id: 56, nombre: 'Melipilla', codigo: '13601', region_id: 7 },
    { id: 57, nombre: 'Alhué', codigo: '13602', region_id: 7 },
    { id: 58, nombre: 'Curacaví', codigo: '13603', region_id: 7 },
    { id: 59, nombre: 'María Pinto', codigo: '13604', region_id: 7 },
    { id: 60, nombre: 'San Pedro', codigo: '13605', region_id: 7 },
    { id: 61, nombre: 'Colina', codigo: '13301', region_id: 7 },
    { id: 62, nombre: 'Lampa', codigo: '13302', region_id: 7 },
    { id: 63, nombre: 'Tiltil', codigo: '13303', region_id: 7 },
    { id: 64, nombre: 'San Antonio', codigo: '05601', region_id: 6 },
    { id: 65, nombre: 'Algarrobo', codigo: '05602', region_id: 6 },
    { id: 66, nombre: 'Cartagena', codigo: '05603', region_id: 6 },
    { id: 67, nombre: 'El Quisco', codigo: '05604', region_id: 6 },
    { id: 68, nombre: 'El Tabo', codigo: '05605', region_id: 6 },
    { id: 69, nombre: 'Santo Domingo', codigo: '05606', region_id: 6 },
    { id: 70, nombre: 'Valparaíso', codigo: '05101', region_id: 6 },
    { id: 71, nombre: 'Casablanca', codigo: '05102', region_id: 6 },
    { id: 72, nombre: 'Concón', codigo: '05103', region_id: 6 },
    { id: 73, nombre: 'Juan Fernández', codigo: '05104', region_id: 6 },
    { id: 74, nombre: 'Puchuncaví', codigo: '05105', region_id: 6 },
    { id: 75, nombre: 'Quintero', codigo: '05107', region_id: 6 },
    { id: 76, nombre: 'Viña del Mar', codigo: '05109', region_id: 6 },
    { id: 77, nombre: 'Quilpué', codigo: '05801', region_id: 6 },
    { id: 78, nombre: 'Limache', codigo: '05802', region_id: 6 },
    { id: 79, nombre: 'Olmué', codigo: '05803', region_id: 6 },
    { id: 80, nombre: 'Villa Alemana', codigo: '05804', region_id: 6 },
    { id: 81, nombre: 'Quillota', codigo: '05501', region_id: 6 },
    { id: 82, nombre: 'Calera', codigo: '05502', region_id: 6 },
    { id: 83, nombre: 'Hijuelas', codigo: '05503', region_id: 6 },
    { id: 84, nombre: 'La Cruz', codigo: '05504', region_id: 6 },
    { id: 85, nombre: 'Nogales', codigo: '05506', region_id: 6 },
    { id: 86, nombre: 'La Ligua', codigo: '05401', region_id: 6 },
    { id: 87, nombre: 'Cabildo', codigo: '05402', region_id: 6 },
    { id: 88, nombre: 'Papudo', codigo: '05403', region_id: 6 },
    { id: 89, nombre: 'Petorca', codigo: '05404', region_id: 6 },
    { id: 90, nombre: 'Zapallar', codigo: '05405', region_id: 6 },
    { id: 91, nombre: 'Los Andes', codigo: '05701', region_id: 6 },
    { id: 92, nombre: 'Calle Larga', codigo: '05702', region_id: 6 },
    { id: 93, nombre: 'Rinconada', codigo: '05703', region_id: 6 },
    { id: 94, nombre: 'San Esteban', codigo: '05704', region_id: 6 },
    { id: 95, nombre: 'Rancagua', codigo: '06101', region_id: 8 },
    { id: 96, nombre: 'Codegua', codigo: '06102', region_id: 8 },
    { id: 97, nombre: 'Coinco', codigo: '06103', region_id: 8 },
    { id: 98, nombre: 'Coltauco', codigo: '06104', region_id: 8 },
    { id: 99, nombre: 'Doñihue', codigo: '06105', region_id: 8 },
    { id: 100, nombre: 'Graneros', codigo: '06106', region_id: 8 }
  ];

  constructor(private http: HttpClient) { }

  // Obtener todas las regiones de Chile
  getRegiones(): Observable<Region[]> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    console.log('Haciendo petición a:', 'https://apis.digital.gob.cl/dpa/regiones');
    return this.http.get<Region[]>('https://apis.digital.gob.cl/dpa/regiones', { headers })
      .pipe(
        catchError(error => {
          console.warn('Error al cargar regiones desde API, usando datos de fallback:', error);
          return of(this.regionesFallback);
        })
      );
  }

  // Obtener comunas por región
  getComunasByRegion(regionId: number): Observable<Comuna[]> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    console.log('Haciendo petición a:', `https://apis.digital.gob.cl/dpa/regiones/${regionId}/comunas`);
    return this.http.get<Comuna[]>(`https://apis.digital.gob.cl/dpa/regiones/${regionId}/comunas`, { headers })
      .pipe(
        catchError(error => {
          console.warn('Error al cargar comunas desde API, usando datos de fallback:', error);
          const comunasFiltradas = this.comunasFallback.filter(comuna => comuna.region_id === regionId);
          return of(comunasFiltradas);
        })
      );
  }

  // Obtener todas las comunas
  getComunas(): Observable<Comuna[]> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.get<Comuna[]>('https://apis.digital.gob.cl/dpa/comunas', { headers })
      .pipe(
        catchError(error => {
          console.warn('Error al cargar comunas desde API, usando datos de fallback:', error);
          return of(this.comunasFallback);
        })
      );
  }

  // Buscar comunas por nombre
  searchComunas(query: string): Observable<Comuna[]> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.get<Comuna[]>(`https://apis.digital.gob.cl/dpa/comunas?nombre=${encodeURIComponent(query)}`, { headers })
      .pipe(
        catchError(error => {
          console.warn('Error al buscar comunas desde API, usando datos de fallback:', error);
          const comunasFiltradas = this.comunasFallback.filter(comuna =>
            comuna.nombre.toLowerCase().includes(query.toLowerCase())
          );
          return of(comunasFiltradas);
        })
      );
  }
}
