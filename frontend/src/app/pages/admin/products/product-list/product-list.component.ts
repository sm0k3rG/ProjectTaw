import { OfferService } from './../../../../core/services/offer.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../category/category.component';
import { Product } from '../../../../core/models/product.interface';
import { ProductService } from '../../../../core/services/product.service';
import { CategoryService } from '../../../../core/services/category.service';
import { NgbPaginationConfig, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ProductAddComponent } from "../product-add/product-add.component";
import { ProductEditComponent } from '../product-edit/product-edit.component'; // Importar
import Swal from 'sweetalert2';
import { MainNavbarComponent } from '../../../../shared/main-navbar/main-navbar.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CategoryComponent, ProductAddComponent, ProductEditComponent, NgbPaginationModule, MainNavbarComponent], // Añadir ProductEditComponent
  providers: [ProductService, CategoryService, OfferService, NgbPaginationConfig],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  page = 1;
  pageSize = 10;
  totalItems = 0;

  productos: Product[] = [];
  productoSeleccionado: Product | null = null; // Para editar

  categorias: any[] = [];
  ofertas: any[] = [];
  categoriaSeleccionada: string = '';
  ofertaSeleccionada: string = '';
  ordenSeleccionado: string = '';

  cargando: boolean = false;
  mensaje: string = '';
  mostrarMensaje: boolean = false;
  tipoMensaje: 'success' | 'error' = 'success';

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private offerService: OfferService,
    config: NgbPaginationConfig
  ) {
    config.size = 'md';
    config.boundaryLinks = true;
  }

  ngOnInit(): void {
    this.cargarCategorias();
    this.cargarOfertas();
    this.obtenerProductos();
  }

  cargarCategorias(): void {
    this.categoryService.obtenerCategorias().subscribe({
      next: (categorias) => this.categorias = categorias,
    });
  }

  cargarOfertas(): void {
    this.offerService.obtenerOfertas().subscribe({
      next: (ofertas) => this.ofertas = ofertas,
    });
  }

  obtenerProductos(): void {
    this.cargando = true;
    this.productService.obtenerProductos(
      this.page,
      this.pageSize,
      this.categoriaSeleccionada ? Number(this.categoriaSeleccionada) : undefined,
      this.ofertaSeleccionada ? Number(this.ofertaSeleccionada) : undefined,
      this.ordenSeleccionado || undefined,
    ).subscribe({
      next: (respuesta) => {
        this.productos = respuesta.productos;
        this.cargando = false;
        this.totalItems = respuesta.total;
      },
      error: () => this.cargando = false
    });
  }

  onCambiarPagina(page: number): void {
    this.page = page;
    this.obtenerProductos();
  }

  onCambiarCategoria(event: any): void {
    this.categoriaSeleccionada = event.target.value;
    this.page = 1;
    this.obtenerProductos();
  }

  onCambiarOferta(event: any): void {
    this.ofertaSeleccionada = event.target.value;
    this.page = 1;
    this.obtenerProductos();
  }

  onCambiarOrden(event: any): void {
    this.ordenSeleccionado = event.target.value;
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

  onProductoAgregado(): void {
    this.obtenerProductos();
    this.mostrarMensajeUsuario('Producto agregado exitosamente', 'success');
  }

  onProductoActualizado(): void {
    this.obtenerProductos(); // Recarga la lista
    const modalElement = document.getElementById('modalEditarProducto');
    if (modalElement) {
      const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
    this.mostrarMensajeUsuario('Producto actualizado exitosamente', 'success');
  }

  onEditarProducto(producto: Product): void {
    this.productoSeleccionado = producto;
  }

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
          Swal.fire('Error', error.error?.message || 'Error al eliminar el producto.', 'error');
        }
      });
    });
  }

  mostrarMensajeUsuario(mensaje: string, tipo: 'success' | 'error'): void {
    this.mensaje = mensaje;
    this.tipoMensaje = tipo;
    this.mostrarMensaje = true;
    setTimeout(() => this.mostrarMensaje = false, 5000);
  }
  
  getEstadoColor(estado: string): string {
    switch (estado?.toUpperCase()) {
      case 'ACTIVO': return 'bg-success text-white';
      case 'ELIMINADO': return 'bg-danger text-white';
      case 'INACTIVO': return 'bg-warning text-dark';
      default: return 'bg-secondary text-white';
    }
  }
}