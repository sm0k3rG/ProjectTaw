import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { CartService } from '../../../../services/cart.service';
import { CartSidebarService, CartSidebarState } from '../../../../services/cart-sidebar.service';
import { CartItem } from '../../../../models/cart-item.model';

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
  deliveryType: string = 'delivery';
  showCartButton: boolean = false;

  constructor(
    private cartSidebarService: CartSidebarService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartSidebarService.getSidebarState().subscribe(state => {
      this.sidebarState = state;
      this.isOpen = state.isOpen;
    });

    this.loadCartItems();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentUrl = this.router.url;
        this.showCartButton =
          currentUrl.startsWith('/user/products') &&
          !currentUrl.includes('/purchase-history') &&
          !currentUrl.includes('/profile');
      });
  }

  loadCartItems(): void {
    this.cartService.getCartItems().subscribe({
      next: (items) => {
        this.cartItems = items.map(item => ({
          product: item.product,
          quantity: item.quantity
        }));
        this.updateTotals();
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
    this.loadCartItems();
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.loadCartItems();
  }

  getSubtotal(item: CartItem): number {
    return item.product.precio * item.quantity;
  }

  updateTotals(): void {
    this.total = this.cartItems.reduce((sum, item) => sum + this.getSubtotal(item), 0);
    this.cartSidebarService.updateSidebarState(this.cartItems.length, this.total);
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
  const usuarioId = 1;

  let direccionId: number;
  let direccionRetiroId: number | undefined;

  if (localStorage.getItem('deliveryAddress')) {
    const direccion = JSON.parse(localStorage.getItem('deliveryAddress')!);
    direccionId = direccion.id; // Envío a domicilio
  } else if (localStorage.getItem('pickupStore')) {
    const store = JSON.parse(localStorage.getItem('pickupStore')!);
    direccionId = 1; // Valor fijo para retiro
    direccionRetiroId = store.id; // ID real de la sucursal
  } else {
    alert('No se ha seleccionado dirección ni tienda para retiro');
    return;
  }

  const lineasDePedido = this.cartItems.map(item => ({
    productoId: item.product.id,
    cantidad: item.quantity
  }));

  const pedido: any = {
    usuarioId,
    direccionId,
    lineasDePedido
  };

  if (direccionRetiroId) {
    pedido.direccionRetiroId = direccionRetiroId;
  }

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
