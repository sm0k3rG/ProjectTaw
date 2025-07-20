import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item.model';

export interface CartPageData {
  items: CartItem[];
  total: number;
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
}

export interface CheckoutData {
  userId: number;
  items: CartItem[];
  deliveryMethod: 'retiro' | 'delivery';
  deliveryAddress?: any;
  selectedStore?: any;
  paymentMethod: string;
  couponCode?: string;
}

export interface OrderSummary {
  orderId: string;
  total: number;
  estimatedDelivery: string;
  items: CartItem[];
}

@Injectable({
  providedIn: 'root'
})
export class CartPageService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // Obtener datos completos del carrito
  getCartPageData(userId: number): Observable<CartPageData> {
    return this.http.get<CartPageData>(`${this.apiUrl}/cart/page-data/${userId}`);
  }

  // Actualizar cantidad de un item
  updateItemQuantity(userId: number, itemId: number, quantity: number): Observable<CartItem> {
    return this.http.put<CartItem>(`${this.apiUrl}/cart/update-quantity`, {
      userId,
      itemId,
      quantity
    });
  }

  // Remover item del carrito
  removeFromCart(userId: number, itemId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/cart/remove/${itemId}?userId=${userId}`);
  }

  // Limpiar carrito
  clearCart(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/cart/clear/${userId}`);
  }

  // Aplicar cupón de descuento
  applyCoupon(userId: number, couponCode: string): Observable<{ discount: number; message: string; valid: boolean }> {
    return this.http.post<{ discount: number; message: string; valid: boolean }>(`${this.apiUrl}/cart/apply-coupon`, {
      userId,
      couponCode
    });
  }

  // Calcular envío
  calculateShipping(userId: number, deliveryMethod: 'retiro' | 'delivery', address?: any): Observable<{ cost: number; estimatedTime: string }> {
    return this.http.post<{ cost: number; estimatedTime: string }>(`${this.apiUrl}/cart/calculate-shipping`, {
      userId,
      deliveryMethod,
      address
    });
  }

  // Verificar disponibilidad de productos
  checkProductAvailability(userId: number): Observable<{ available: boolean; unavailableItems: string[] }> {
    return this.http.get<{ available: boolean; unavailableItems: string[] }>(`${this.apiUrl}/cart/check-availability/${userId}`);
  }

  // Proceder al checkout
  proceedToCheckout(checkoutData: CheckoutData): Observable<OrderSummary> {
    return this.http.post<OrderSummary>(`${this.apiUrl}/cart/checkout`, checkoutData);
  }

  // Guardar carrito para más tarde
  saveCartForLater(userId: number): Observable<{ saved: boolean; message: string }> {
    return this.http.post<{ saved: boolean; message: string }>(`${this.apiUrl}/cart/save-for-later`, {
      userId
    });
  }

  // Obtener carritos guardados
  getSavedCarts(userId: number): Observable<{ id: number; name: string; items: CartItem[]; savedAt: string }[]> {
    return this.http.get<{ id: number; name: string; items: CartItem[]; savedAt: string }[]>(`${this.apiUrl}/cart/saved/${userId}`);
  }

  // Cargar carrito guardado
  loadSavedCart(userId: number, savedCartId: number): Observable<CartPageData> {
    return this.http.post<CartPageData>(`${this.apiUrl}/cart/load-saved`, {
      userId,
      savedCartId
    });
  }

  // Obtener métodos de pago disponibles
  getPaymentMethods(): Observable<{ id: string; name: string; description: string; icon: string }[]> {
    return this.http.get<{ id: string; name: string; description: string; icon: string }[]>(`${this.apiUrl}/payment-methods`);
  }

  // Validar información de checkout
  validateCheckout(checkoutData: CheckoutData): Observable<{ valid: boolean; errors: string[] }> {
    return this.http.post<{ valid: boolean; errors: string[] }>(`${this.apiUrl}/cart/validate-checkout`, checkoutData);
  }
}
