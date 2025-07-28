import { UsersService } from './../../../../../../../backend/src/users/users.service';
import { CartService } from './../../../../services/cart.service';
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
  UsersService: any;
  deliveryType: string = 'delivery';

  constructor(private cartSidebarService: CartSidebarService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartSidebarService.getSidebarState().subscribe(state => {
      this.sidebarState = state;
      this.isOpen = state.isOpen;
    });

    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartService.getCartItems().subscribe({
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

    this.cartService.updateQuantity(productId, quantity);
    console.log('Cantidad actualizada exitosamente');
    this.loadCartItems();
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
    console.log('Item removido exitosamente');
    this.loadCartItems();
  }

  getSubtotal(item: CartItem): number {
    return item.product.precio * item.quantity;
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

  procederAlPago(): void {
    const usuarioId = 1
    // const usuarioId = this.UsersService.getCurrentUserId();

    let direccion: any = null;

    if (localStorage.getItem('deliveryAddress')) {
      const address = localStorage.getItem('deliveryAddress');
      if (address) {
        direccion = JSON.parse(address);
      }
    } else {
      const store = localStorage.getItem('pickupStore');
      if (store) {
        const parsedStore = JSON.parse(store);
        direccion = parsedStore.id;
      }
    }

    const lineasDePedido = this.cartItems.map(item => ({
      productoId: item.product.id,
      cantidad: item.quantity
    }));

    const pedido = {
      usuarioId,
      direccion,
      lineasDePedido
    };

    console.log('Pedido a crear:', pedido);

    this.cartService.crearPedido(pedido).subscribe({
      next: () => {
        alert('¡Pedido creado con éxito!');
        this.cartService.clearCart();
      },
      error: () => {
        alert('Error al crear el pedido');
      }
    });
  }
}
