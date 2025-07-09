import { TestBed } from '@angular/core/testing';
import { ProductoSucursalService } from './productBranch.service';

describe('ProductoSucursalService', () => {
  let service: ProductoSucursalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductoSucursalService]
    });
    service = TestBed.inject(ProductoSucursalService);
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debería tener método obtenerTodos', () => {
    expect(typeof service.obtenerTodos).toBe('function');
  });

  it('debería tener método crearProductoSucursal', () => {
    expect(typeof service.crearProductoSucursal).toBe('function');
  });

  it('debería tener método actualizarProductoSucursal', () => {
    expect(typeof service.actualizarProductoSucursal).toBe('function');
  });

  it('debería tener método eliminarProductoSucursal', () => {
    expect(typeof service.eliminarProductoSucursal).toBe('function');
  });
}); 