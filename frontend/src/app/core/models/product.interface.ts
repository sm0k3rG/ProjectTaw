import { Category } from "./category.interface";
import { ProductBranch } from "./product-branch.interface";
import { Offer } from "./offer.interface";

export interface Product {
  id: number;
  nombre: string;
  categoria: Category;
  descripcion: string;
  formato: string;
  sucursales: ProductBranch[];
  precio: number;
  estado: string;
  imagenUrl: string;
  oferta?: Offer | null;
}
