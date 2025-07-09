import { Component, OnInit, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../category/category.component';
import { Product } from '../../../../core/models/product.interface';
import { ProductService } from '../../../../core/services/product.service';
import { CategoryService } from '../../../../core/services/category.service';

/**
 * Componente para la gestión y visualización de productos.
 * Permite listar, eliminar productos y gestionar categorías relacionadas.
 */
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, CategoryComponent],
  providers: [ProductService, CategoryService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  constructor(
    private productService: ProductService,
  ) {}

  /**
   * Lista  obtenidos del backend.
   */
  productos: Product[] = [];

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
    this.productService.obtenerProductos().subscribe({
      next: (productos: Product[]) => {
        this.productos = productos;
        console.log(productos);
      }
    });
  }



}
