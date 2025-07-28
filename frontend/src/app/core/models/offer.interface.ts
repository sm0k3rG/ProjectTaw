export enum OfertaEstado {
  ACTIVA = 'ACTIVA',
  INACTIVA = 'INACTIVA',
  EXPIRADA = 'EXPIRADA'
}

export interface Offer {
    id: number; 
    porcentaje: number;
    descripcion: string;
    fechaInicio: string;
    fechaFin: string;
    estado: OfertaEstado;
    productos?: any[]; // Relación con productos (opcional para mostrar)
}

export interface CreateOfferDto {
    porcentaje: number;
    descripcion: string;
    fechaInicio: string;
    fechaFin: string;
}
  