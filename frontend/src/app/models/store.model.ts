export interface StoreWithDistance {
  id: number;
  nombre: string;
  direccion: string;
  region: string;
  ciudad: string;
  distancia?: number;
  latitud?: number | null;
  longitud?: number | null;
}
