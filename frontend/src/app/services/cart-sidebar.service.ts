import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';

export interface CartSidebarState {
  isOpen: boolean;
  totalItems: number;
  totalAmount: number;
}

export interface CartItemBackend {
  id: number;
  productId: number;
  quantity: number;
  userId: number;
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class CartSidebarService {
  private apiUrl = 'http://localhost:3000';
  private sidebarState = new BehaviorSubject<CartSidebarState>({
    isOpen: false,
    totalItems: 0,
    totalAmount: 0
  });

  constructor(private http: HttpClient) { }

  // Obtener estado del sidebar
  getSidebarState(): Observable<CartSidebarState> {
    return this.sidebarState.asObservable();
  }

  // Cambiar estado del sidebar
  toggleSidebar(): void {
    const currentState = this.sidebarState.value;
    this.sidebarState.next({
      ...currentState,
      isOpen: !currentState.isOpen
    });
  }

  // Obtener items del carrito desde el backend
  getCartItems(userId: number): Observable<CartItemBackend[]> {
    return this.http.get<CartItemBackend[]>(`${this.apiUrl}/cart/user/${userId}`);
  }

  // Agregar item al carrito
  addToCart(userId: number, productId: number, quantity: number): Observable<CartItemBackend> {
    return this.http.post<CartItemBackend>(`${this.apiUrl}/cart/add`, {
      userId,
      productId,
      quantity
    });
  }

  // Actualizar cantidad de un item
  updateItemQuantity(userId: number, itemId: number, quantity: number): Observable<CartItemBackend> {
    return this.http.put<CartItemBackend>(`${this.apiUrl}/cart/update-quantity`, {
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

  // Obtener total del carrito
  getCartTotal(userId: number): Observable<{ total: number; totalItems: number }> {
    return this.http.get<{ total: number; totalItems: number }>(`${this.apiUrl}/cart/total/${userId}`);
  }

  // Aplicar cupón de descuento
  applyCoupon(userId: number, couponCode: string): Observable<{ discount: number; message: string }> {
    return this.http.post<{ discount: number; message: string }>(`${this.apiUrl}/cart/apply-coupon`, {
      userId,
      couponCode
    });
  }

  // Guardar carrito para más tarde
  saveCartForLater(userId: number): Observable<{ saved: boolean; message: string }> {
    return this.http.post<{ saved: boolean; message: string }>(`${this.apiUrl}/cart/save-for-later`, {
      userId
    });
  }

  // Actualizar estado del sidebar con nuevos datos
  updateSidebarState(totalItems: number, totalAmount: number): void {
    const currentState = this.sidebarState.value;
    this.sidebarState.next({
      ...currentState,
      totalItems,
      totalAmount
    });
  }
}
