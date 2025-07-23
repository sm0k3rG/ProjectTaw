import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../models/product.model';
import { ProductsService } from '../../../../services/products.service';
import { CartService } from '../../../../services/cart.service';
import { MainNavbarComponent } from '../../../../shared/main-navbar/main-navbar.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, MainNavbarComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product | null = null;
  loading = true;
  error = false;
  selectedQuantity = 1;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(): void {
    const productId = this.route.snapshot.params['id'];
    if (productId) {
      this.productsService.getProductById(productId).subscribe({
        next: (product) => {
          this.product = product;
          console.log('Producto cargado:', product);
          this.loading = false;
        },
        error: (error) => {
          console.error('Error cargando producto:', error);
          this.error = true;
          this.loading = false;
        }
      });
    }
  }

  addToCart(): void {
    if (!this.product) return;

    // Verificar disponibilidad antes de agregar al carrito
    this.productsService.checkProductAvailability(this.product.id, this.selectedQuantity).subscribe({
      next: (availability) => {
        if (availability.available) {
          this.cartService.addToCart(this.product!);
          console.log('Producto agregado al carrito:', this.product!.name);
        } else {
          alert(`No hay suficiente stock. Disponible: ${availability.stock}`);
        }
      },
      error: (error) => {
        console.error('Error verificando disponibilidad:', error);
        // Agregar al carrito de todas formas
        this.cartService.addToCart(this.product!);
      }
    });
  }

  onQuantityChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target && target.value) {
      this.selectedQuantity = parseInt(target.value, 10);
    }
  }
}
