import { OfferService } from './../../../../core/services/offer.service.spec';
import { Component, OnInit, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../category/category.component';
import { Product } from '../../../../core/models/product.interface';
import { ProductService } from '../../../../core/services/product.service';
import { CategoryService } from '../../../../core/services/category.service';
import { NgbPaginationConfig, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ProductAddComponent } from "../product-add/product-add.component";
import Swal from 'sweetalert2';
import { MainNavbarComponent } from '../../../../shared/main-navbar/main-navbar.component';


/**
 * Componente para la gestión y visualización de productos.
 * Permite listar, eliminar productos y gestionar categorías relacionadas.
 */
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CategoryComponent, ProductAddComponent, NgbPaginationModule, ProductAddComponent, MainNavbarComponent],
  providers: [ProductService, CategoryService, NgbPaginationConfig],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  page = 1;
  pageSize = 10; // Productos por página
  totalItems = 0; // Total de productos (se actualizará desde el backend)

  categorias: any[] = [];
  ofertas: any[] = [];
  categoriasSeleccionadas: string[] = [];
  categoriaSeleccionada: string = '';
  ofertasSeleccionadas: string[] = [];
  ofertaSeleccionada: string = '';
  ordenSeleccionado: string = '';

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private offerService: OfferService,
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
   * Mensaje de estado para mostrar al usuario.
   */
  mensaje: string = '';
  mostrarMensaje: boolean = false;
  tipoMensaje: 'success' | 'error' = 'success';

  /**
   * Retorna la clase CSS para el color del estado del producto
   * @param estado - Estado del producto
   */
  getEstadoColor(estado: string): string {
    switch (estado?.toUpperCase()) {
      case 'ACTIVO':
        return 'bg-success text-white';
      case 'ELIMINADO':
        return 'bg-danger text-white';
      case 'INACTIVO':
        return 'bg-warning text-dark';
      default:
        return 'bg-secondary text-white';
    }
  }

  /**
   * Método de ciclo de vida que se ejecuta al inicializar el componente.
   * Llama a la función para obtener los productosy productos-sucursal.
   */
  ngOnInit(): void {
    this.cargarCategorias();
    this.cargarOfertas();
    this.obtenerProductos();
  }

  cargarCategorias(): void {
    this.categoryService.obtenerCategorias().subscribe({
      next: (categorias) => {
        this.categorias = categorias;
      }
    });
  }

  cargarOfertas(): void {
    this.offerService.obtenerOfertas().subscribe({
      next: (ofertas) => {
        this.ofertas = ofertas;
      }
    });
  }

  /**
   * Obtiene la lista de productos desde el backend y la asigna a la variable local.
   */
  obtenerProductos(): void {
    this.cargando = true;
    this.productService.obtenerProductos(
      this.page,
      this.pageSize,
      this.categoriaSeleccionada !== '' ? Number(this.categoriaSeleccionada) : undefined,
      this.ofertaSeleccionada !== '' ? Number(this.ofertaSeleccionada) : undefined,
      this.ordenSeleccionado || undefined,
    
    ).subscribe({
      next: (respuesta) => {
        this.productos = respuesta.productos;
        this.cargando = false;
        this.totalItems = respuesta.total;
        // Si necesitas el total de páginas, puedes guardarlo aquí:
        // this.totalPaginas = respuesta.totalPaginas;
      },
    });
  }

  /**
   * Maneja el cambio de página en la paginación
   */
  onCambiarPagina(page: number): void {
    this.page = page;
    this.obtenerProductos();
  }

  onCambiarCategoria(event: any): void {
    const value = event.target.value;
    this.categoriaSeleccionada = value ? String(value) : '';
    this.page = 1;
    this.obtenerProductos();
  }

  onCambiarOferta(event: any): void {
    const value = event.target.value;
    this.ofertaSeleccionada = value ? String(value) : '';
    this.page = 1;
    this.obtenerProductos();
  }

  onCambiarOrden(event: any): void {
    const value = event.target.value;
    this.ordenSeleccionado = value;
    this.page = 1;
    this.obtenerProductos();
  }

  limpiarFiltros(): void {
    this.categoriaSeleccionada = '';
    this.ordenSeleccionado = '';
    this.ofertaSeleccionada = '';
    this.page = 1;
    this.obtenerProductos();
  }

  /**
   * Maneja el evento cuando se agrega un producto exitosamente.
   * Recarga la lista de productos, cierra el modal y muestra mensaje de éxito.
   */
  onProductoAgregado(): void {
    this.obtenerProductos();
    //Cerrar el modal usando Bootstrap
    // const modal = document.getElementById('modalAgregarProducto');
    // if (modal) {
    //   const bootstrapModal = (window as any).bootstrap?.Modal.getInstance(modal);
    //   if (bootstrapModal) {
    //     bootstrapModal.hide();
    //   }
    // }
    // Mostrar mensaje de éxito al usuario
    this.mostrarMensajeUsuario('Producto agregado exitosamente', 'success');
  }

  onEditarProducto(producto: Product): void {
    console.log('Editar producto:');
  }

  /**
   * Elimina un producto por su ID.
   * Muestra una confirmación antes de proceder con la eliminación.
   * @param producto - Producto a eliminar
   */
eliminarProducto(producto: Product): void {
  Swal.fire({
    title: '¿Estás seguro?',
    text: `¿Deseas eliminar el producto "${producto.nombre}"?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (!result.isConfirmed) return;

    this.productService.eliminarProducto(producto.id).subscribe({
      next: () => {
        Swal.fire('Eliminado', 'Producto eliminado exitosamente.', 'success');
        this.obtenerProductos();
      },
      error: (error) => {
        console.error('Error al eliminar producto:', error);
        let mensajeError = 'Error al eliminar el producto.';

        if (error.error?.message) {
          mensajeError = error.error.message;
        } else if (error.status === 404) {
          mensajeError = 'Producto no encontrado.';
        } else if (error.status === 400) {
          mensajeError = 'No se puede eliminar el producto. Verifica que no tenga stock disponible o no esté asociado a pedidos activos.';
        }

        Swal.fire('Error', mensajeError, 'error');
      }
    });
  });
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
}
