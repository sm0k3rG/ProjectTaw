import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../../../models/cart-item.model';
import { CartSidebarService, CartSidebarState } from '../../../../services/cart-sidebar.service';

@Component({
  selector: 'app-cart-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-sidebar.component.html',
  styleUrls: ['./cart-sidebar.component.css']
})
export class CartSidebarComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;
  isOpen: boolean = false;
  sidebarState: CartSidebarState = { isOpen: false, totalItems: 0, totalAmount: 0 };

  constructor(private cartSidebarService: CartSidebarService) { }

  ngOnInit(): void {
    // Suscribirse al estado del sidebar
    this.cartSidebarService.getSidebarState().subscribe(state => {
      this.sidebarState = state;
      this.isOpen = state.isOpen;
    });

    // Cargar items del carrito (asumiendo userId = 1 por ahora)
    this.loadCartItems(1);
  }

  loadCartItems(userId: number): void {
    this.cartSidebarService.getCartItems(userId).subscribe({
      next: (items) => {
        this.cartItems = items.map(item => ({
          product: item.product,
          quantity: item.quantity
        }));
        this.updateTotals();
        console.log('Items del carrito cargados desde el backend:', this.cartItems);
      },
      error: (error) => {
        console.error('Error cargando items del carrito:', error);
        this.cartItems = [];
        this.updateTotals();
      }
    });
  }

  toggleSidebar(): void {
    this.cartSidebarService.toggleSidebar();
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    // Asumiendo userId = 1 por ahora
    this.cartSidebarService.updateItemQuantity(1, productId, quantity).subscribe({
      next: (updatedItem) => {
        console.log('Cantidad actualizada exitosamente:', updatedItem);
        this.loadCartItems(1); // Recargar items
      },
      error: (error) => {
        console.error('Error actualizando cantidad:', error);
        // Recargar items para asegurar sincronización
        this.loadCartItems(1);
      }
    });
  }

  removeFromCart(productId: number): void {
    // Asumiendo userId = 1 por ahora
    this.cartSidebarService.removeFromCart(1, productId).subscribe({
      next: () => {
        console.log('Item removido exitosamente');
        this.loadCartItems(1); // Recargar items
      },
      error: (error) => {
        console.error('Error removiendo item:', error);
        // Recargar items para asegurar sincronización
        this.loadCartItems(1);
      }
    });
  }

  getSubtotal(item: CartItem): number {
    return item.product.price * item.quantity;
  }

  updateTotals(): void {
    this.total = this.cartItems.reduce((sum, item) => sum + this.getSubtotal(item), 0);
    this.cartSidebarService.updateSidebarState(this.cartItems.length, this.total);
    console.log('Totales actualizados:', { items: this.cartItems.length, total: this.total });
  }

  onQuantityChange(event: Event, productId: number): void {
    const target = event.target as HTMLInputElement;
    if (target && target.value) {
      const quantity = parseInt(target.value, 10);
      if (quantity > 0) {
        this.updateQuantity(productId, quantity);
      }
    }
  }
}
