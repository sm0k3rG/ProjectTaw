export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoriaId: number;
  ofertaId: number;
  imagenUrl: string;
  estado: string;
  categoria: {
    id: number;
    nombre: string;
    estado: string;
  };
  oferta: {
    id: number;
    porcentaje: number;
    descripcion: string;
    fechaInicio: string;
    fechaFin: string;
    estado: string;
  };
  sucursales: Array<{
    productoId: number;
    sucursalId: number;
    stock: number;
    sucursal: {
      id: number;
      nombre: string;
      direccion: string;
      ciudad: string;
      region: string;
    };
  }>;
}

export interface cartProduct{
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
}
