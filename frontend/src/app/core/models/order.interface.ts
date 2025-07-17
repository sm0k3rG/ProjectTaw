export interface Order {
  id: number;
  estado: string;
  fecha: string;
  direccion?: {
    id: number;
    calle: string;
    numero: string;
    ciudad: string;
    provincia: string;
    codigoPostal: string;
    referencia?: string;
  };
  lineasPedido: Array<{
    id: number;
    cantidad: number;
    precioUnitario: number;
    producto: {
      id: number;
      nombre: string;
      imagenUrl?: string;
      descripcion?: string;
    };
  }>;
  total: number;
} 