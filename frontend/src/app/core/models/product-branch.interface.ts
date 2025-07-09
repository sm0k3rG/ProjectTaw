import { Branch } from "./branch.interface";

export interface ProductBranch {
  productoId: number;
  sucursalId:  number;
  stock: number;
  sucursal: Branch;
}
