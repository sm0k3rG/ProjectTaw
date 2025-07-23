import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../../../models/cart-item.model';
import { CartPageService, CartPageData, CheckoutData } from '../../../../services/cart-page.service';
import { DeliveryTypeSidebarComponent } from '../../delivery-type-sidebar/delivery-type-sidebar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, DeliveryTypeSidebarComponent, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartData: CartPageData = {
    items: [],
    total: 0,
    subtotal: 0,
    tax: 0,
    shipping: 0,
    discount: 0
  };

  // NUEVO: Estado para método de entrega
  deliveryMethod: 'retiro' | 'delivery' | null = null;
  // NUEVO: Dirección para delivery
  deliveryAddress = {
    nombre: '',
    telefono: '',
    direccion: '',
    numero: '',
    depto: '',
    comuna: '',
    referencias: ''
  };
  // NUEVO: Sucursal seleccionada para retiro
  selectedStore: any = null;
  // NUEVO: Control de modal de sucursal
  showStoreModal = false;

  constructor(private cartPageService: CartPageService) { }

  ngOnInit(): void {
    this.loadCartData(1); // Asumiendo userId = 1 por ahora
  }

  loadCartData(userId: number): void {
    this.cartPageService.getCartPageData(userId).subscribe({
      next: (data) => {
        this.cartData = data;
        console.log('Datos del carrito cargados desde el backend:', data);
      },
      error: (error) => {
        console.error('Error cargando datos del carrito:', error);
        // Inicializar con datos vacíos en caso de error
        this.cartData = {
          items: [],
          total: 0,
          subtotal: 0,
          tax: 0,
          shipping: 0,
          discount: 0
        };
      }
    });
  }

  // NUEVO: Guardar sucursal seleccionada desde el modal
  onStoreSelected(store: any) {
    this.selectedStore = store;
    this.showStoreModal = false;
    console.log('Tienda seleccionada:', store);
  }

  // NUEVO: Guardar dirección de delivery
  saveDeliveryAddress() {
    console.log('Dirección de delivery guardada:', this.deliveryAddress);
    // Aquí podrías enviar la dirección al backend si es necesario
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    this.cartPageService.updateItemQuantity(1, productId, quantity).subscribe({
      next: (updatedItem) => {
        console.log('Cantidad actualizada exitosamente:', updatedItem);
        this.loadCartData(1); // Recargar datos
      },
      error: (error) => {
        console.error('Error actualizando cantidad:', error);
        // Recargar datos para asegurar sincronización
        this.loadCartData(1);
      }
    });
  }

  removeFromCart(productId: number): void {
    this.cartPageService.removeFromCart(1, productId).subscribe({
      next: () => {
        console.log('Item removido exitosamente');
        this.loadCartData(1); // Recargar datos
      },
      error: (error) => {
        console.error('Error removiendo item:', error);
        // Recargar datos para asegurar sincronización
        this.loadCartData(1);
      }
    });
  }

  clearCart(): void {
    this.cartPageService.clearCart(1).subscribe({
      next: () => {
        console.log('Carrito limpiado exitosamente');
        this.loadCartData(1); // Recargar datos
      },
      error: (error) => {
        console.error('Error limpiando carrito:', error);
        // Recargar datos para asegurar sincronización
        this.loadCartData(1);
      }
    });
  }

  clearCartAndStorage(): void {
    // Este método se mantiene para compatibilidad
    this.clearCart();
  }

  getSubtotal(item: CartItem): number {
    return item.product.price * item.quantity;
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

  // Nuevo método para proceder al checkout
  proceedToCheckout(): void {
    if (!this.deliveryMethod) {
      alert('Por favor selecciona un método de entrega');
      return;
    }

    if (this.deliveryMethod === 'retiro' && !this.selectedStore) {
      alert('Por favor selecciona una tienda para retiro');
      return;
    }

    if (this.deliveryMethod === 'delivery' && (!this.deliveryAddress.direccion || !this.deliveryAddress.numero)) {
      alert('Por favor completa la información de entrega');
      return;
    }

    const checkoutData: CheckoutData = {
      userId: 1,
      items: this.cartData.items,
      deliveryMethod: this.deliveryMethod,
      deliveryAddress: this.deliveryMethod === 'delivery' ? this.deliveryAddress : undefined,
      selectedStore: this.deliveryMethod === 'retiro' ? this.selectedStore : undefined,
      paymentMethod: 'credit_card' // Por defecto
    };

    console.log('Procediendo al checkout con datos:', checkoutData);

    this.cartPageService.proceedToCheckout(checkoutData).subscribe({
      next: (orderSummary) => {
        console.log('Checkout exitoso:', orderSummary);
        alert(`Orden creada exitosamente! ID: ${orderSummary.orderId}`);
        // Aquí podrías redirigir a la página de confirmación
        this.loadCartData(1); // Recargar carrito
      },
      error: (error) => {
        console.error('Error en checkout:', error);
        alert('Error al procesar el pedido. Por favor intenta nuevamente.');
      }
    });
  }
}
