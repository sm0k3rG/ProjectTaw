import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  private readonly CART_STORAGE_KEY = 'shopping_cart';

  constructor() {
    this.loadCartFromStorage();
  }

  // Cargar carrito desde localStorage
  private loadCartFromStorage(): void {
    try {
      const storedCart = localStorage.getItem(this.CART_STORAGE_KEY);
      if (storedCart) {
        this.cartItems = JSON.parse(storedCart);
        this.cartSubject.next([...this.cartItems]);
      }
    } catch (error) {
      console.error('Error al cargar el carrito desde localStorage:', error);
      this.cartItems = [];
    }
  }

  // Guardar carrito en localStorage
  private saveCartToStorage(): void {
    try {
      localStorage.setItem(this.CART_STORAGE_KEY, JSON.stringify(this.cartItems));
    } catch (error) {
      console.error('Error al guardar el carrito en localStorage:', error);
    }
  }

  // Obtener productos del carrito como Observable
  getCartItems(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  // Obtener productos del carrito como array
  getCartItemsArray(): CartItem[] {
    return this.cartItems;
  }

    // Agregar producto al carrito
  addToCart(product: Product): void {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);

    if (existingItem) {
      // Si el producto ya existe, aumentar la cantidad
      existingItem.quantity += 1;
    } else {
      // Si es un producto nuevo, agregarlo con cantidad 1
      this.cartItems.push({ product, quantity: 1 });
    }

    // Emitir el nuevo estado del carrito y guardar en localStorage
    this.cartSubject.next([...this.cartItems]);
    this.saveCartToStorage();
  }

  // Remover producto del carrito
  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
    this.cartSubject.next([...this.cartItems]);
    this.saveCartToStorage();
  }

  // Actualizar cantidad de un producto
  updateQuantity(productId: number, quantity: number): void {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.cartSubject.next([...this.cartItems]);
        this.saveCartToStorage();
      }
    }
  }

  // Calcular total del carrito
  getTotal(): number {
    return this.cartItems.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  }

  // Obtener cantidad total de items
  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  // Limpiar carrito
  clearCart(): void {
    this.cartItems = [];
    this.cartSubject.next([]);
    this.saveCartToStorage();
  }

  // Limpiar carrito y localStorage
  clearCartAndStorage(): void {
    this.cartItems = [];
    this.cartSubject.next([]);
    localStorage.removeItem(this.CART_STORAGE_KEY);
  }
}
