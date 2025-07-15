import { Component, OnInit, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../category/category.component';
import { Product } from '../../../../core/models/product.interface';
import { ProductService } from '../../../../core/services/product.service';
import { CategoryService } from '../../../../core/services/category.service';
import { NgbPaginationConfig, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ProductAddComponent } from "../product-add/product-add.component";


/**
 * Componente para la gestión y visualización de productos.
 * Permite listar, eliminar productos y gestionar categorías relacionadas.
 */
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CategoryComponent, ProductAddComponent, NgbPaginationModule, ProductAddComponent],
  providers: [ProductService, CategoryService, NgbPaginationConfig],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  page = 1;
  pageSize = 10; // Productos por página
  totalItems = 0; // Total de productos (se actualizará desde el backend)

  categorias: any[] = [];
  categoriaSeleccionada: string = '';
  ordenSeleccionado: string = '';

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
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

  // Mapeo de colores para cada sucursal (stock)
  sucursalStockColorMap: { [key: string]: string } = {
    'Sucursal Centro': 'bg-warning bg-opacity-25 text-dark', // naranjo claro
    'Sucursal Norte': 'bg-primary bg-opacity-25 text-primary', // azul claro
  };

  getSucursalStockColor(sucursalNombre: string): string {
    return this.sucursalStockColorMap[sucursalNombre] || 'bg-secondary text-white';
  }

  /**
   * Método de ciclo de vida que se ejecuta al inicializar el componente.
   * Llama a la función para obtener los productosy productos-sucursal.
   */
  ngOnInit(): void {
    this.cargarCategorias();
    this.obtenerProductos();
  }

  cargarCategorias(): void {
    this.categoryService.obtenerCategorias().subscribe({
      next: (categorias) => {
        this.categorias = categorias;
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
      this.ordenSeleccionado || undefined
    ).subscribe({
      next: (productos: Product[]) => {
        this.productos = productos;
        this.cargando = false;
        this.totalItems = productos.length * this.page; // Esto es temporal
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

  onCambiarOrden(event: any): void {
    const value = event.target.value;
    this.ordenSeleccionado = value;
    this.page = 1;
    this.obtenerProductos();
  }

  limpiarFiltros(): void {
    this.categoriaSeleccionada = '';
    this.ordenSeleccionado = '';
    this.page = 1;
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

  onEditarProducto(producto: Product): void {
    console.log('Editar producto:');
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
}
