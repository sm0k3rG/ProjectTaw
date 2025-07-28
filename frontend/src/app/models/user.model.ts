export interface User {
  id: number;
  nombre: string;
  rol: string;
  email: string;
  telefono: string;
  active?: boolean;
}
