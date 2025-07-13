import { Component, OnInit, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../category/category.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { Product } from '../../../../core/models/product.interface';
import { ProductService } from '../../../../core/services/product.service';
import { CategoryService } from '../../../../core/services/category.service';
import { NgbPaginationConfig, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


/**
 * Componente para la gestión y visualización de productos.
 * Permite listar, eliminar productos y gestionar categorías relacionadas.
 */
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, CategoryComponent, ProductFormComponent, NgbPaginationModule],
  providers: [ProductService, CategoryService, NgbPaginationConfig],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  page = 1;
  pageSize = 10; // Productos por página
  totalItems = 0; // Total de productos (se actualizará desde el backend)

  constructor(
    private productService: ProductService,
    config: NgbPaginationConfig
  ) {
    config.size = 'md';
		config.boundaryLinks = true;
  }

  /**
   * Lista de productos obtenidos del backend.
   */
  productos: Product[] = [];

  /**
   * Indica si se están cargando los productos.
   */
  cargando: boolean = false;

  /**
 * Indica si se está eliminando un producto.
 */
  eliminando: boolean = false;
  /**
   * Mensaje de estado para mostrar al usuario.
   */
  mensaje: string = '';
  mostrarMensaje: boolean = false;
  tipoMensaje: 'success' | 'error' = 'success';

  // Mapeo de colores para cada sucursal
  sucursalColorMap: { [key: string]: string } = {
    'Sucursal Central': 'bg-warning bg-opacity-25 text-dark', // naranja claro con texto oscuro
    'Sucursal Norte': 'bg-primary bg-opacity-25 text-primary', // azul mucho más claro
    // Puedes agregar más sucursales y colores aquí
  };

  getSucursalColor(sucursalNombre: string): string {
    return this.sucursalColorMap[sucursalNombre] || 'bg-dark text-white';
  }

  /**
   * Método de ciclo de vida que se ejecuta al inicializar el componente.
   * Llama a la función para obtener los productosy productos-sucursal.
   */
  ngOnInit(): void {
    this.obtenerProductos();
  }

  /**
   * Obtiene la lista de productos desde el backend y la asigna a la variable local.
   */
  obtenerProductos(): void {
    this.cargando = true;
    this.productService.obtenerProductos(this.page, this.pageSize).subscribe({
      next: (productos: Product[]) => {
        this.productos = productos;
        this.cargando = false;

        console.log('Cantidad de productos:', productos.length);
        // Nota: El totalItems debería venir en la respuesta del backend
        this.totalItems = productos.length * this.page; // Esto es temporal
      },
    });
  }

  /**
   * Maneja el cambio de página en la paginación
   */
  onPageChange(page: number): void {
    this.page = page;
    this.obtenerProductos();
  }

  /**
   * Maneja el evento cuando se agrega un producto exitosamente.
   * Recarga la lista de productos, cierra el modal y muestra mensaje de éxito.
   */
  onProductoAgregado(): void {
    this.obtenerProductos();
    // Cerrar el modal usando Bootstrap
    const modal = document.getElementById('modalAgregarProducto');
    if (modal) {
      const bootstrapModal = (window as any).bootstrap?.Modal.getInstance(modal);
      if (bootstrapModal) {
        bootstrapModal.hide();
      }
    }
    // Mostrar mensaje de éxito al usuario
    this.mostrarMensajeUsuario('Producto agregado exitosamente', 'success');
  }

  mostrarMensajeUsuario(mensaje: string, tipo: 'success' | 'error'): void {
    this.mensaje = mensaje;
    this.tipoMensaje = tipo;
    this.mostrarMensaje = true;
    
    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => {
      this.mostrarMensaje = false;
    }, 5000);
  }

  /**
   * Elimina un producto por su ID.
   * @param id - ID del producto a eliminar
   */
  eliminarProducto(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este producto? Esta acción no se puede deshacer.')) {
      this.eliminando = true;
      
      this.productService.eliminarProducto(id).subscribe({
        next: () => {
          this.eliminando = false;
          this.mostrarMensajeUsuario('Producto eliminado exitosamente', 'success');
          // Recargar la lista de productos después de eliminar
          this.obtenerProductos();
        },
        error: (error) => {
          this.eliminando = false;
          this.mostrarMensajeUsuario('Error al eliminar el producto. Inténtalo de nuevo.', 'error');
        }
      });
    }
  }

}
