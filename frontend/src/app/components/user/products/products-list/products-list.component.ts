import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../models/product.model';
import { ProductsService } from '../../../../services/products.service';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  loading = true;
  error = false;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading = true;
    this.error = false;

    this.productsService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.loading = false;
        console.log('Productos cargados:', products);
      },
      error: (error) => {
        console.error('Error cargando productos:', error);
        this.error = true;
        this.loading = false;
      }
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    console.log('Producto agregado al carrito:', product.name);
  }
}
