import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface AppState {
  userId: number;
  selectedDeliveryType: 'retiro' | 'delivery';
  selectedStore: any;
  deliveryAddress: any;
  cartItemCount: number;
  isDeliverySidebarOpen: boolean;
  isCartSidebarOpen: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private initialState: AppState = {
    userId: 1, // Por defecto, en una app real esto vendría del login
    selectedDeliveryType: 'retiro',
    selectedStore: null,
    deliveryAddress: {},
    cartItemCount: 0,
    isDeliverySidebarOpen: false,
    isCartSidebarOpen: false
  };

  private state = new BehaviorSubject<AppState>(this.initialState);

  constructor() { }

  // Obtener el estado actual
  getState(): Observable<AppState> {
    return this.state.asObservable();
  }

  // Obtener el estado actual de forma síncrona
  getCurrentState(): AppState {
    return this.state.value;
  }

  // Actualizar tipo de entrega
  updateDeliveryType(type: 'retiro' | 'delivery'): void {
    const currentState = this.state.value;
    this.state.next({
      ...currentState,
      selectedDeliveryType: type
    });
  }

  // Actualizar tienda seleccionada
  updateSelectedStore(store: any): void {
    const currentState = this.state.value;
    this.state.next({
      ...currentState,
      selectedStore: store
    });
  }

  // Actualizar dirección de entrega
  updateDeliveryAddress(address: any): void {
    const currentState = this.state.value;
    this.state.next({
      ...currentState,
      deliveryAddress: { ...address }
    });
  }


  // Actualizar cantidad de items en el carrito
  updateCartItemCount(count: number): void {
    const currentState = this.state.value;
    this.state.next({
      ...currentState,
      cartItemCount: count
    });
  }

  // Abrir/cerrar sidebar de delivery
  toggleDeliverySidebar(open: boolean): void {
    const currentState = this.state.value;
    this.state.next({
      ...currentState,
      isDeliverySidebarOpen: open
    });
  }

  // Abrir/cerrar sidebar del carrito
  toggleCartSidebar(open: boolean): void {
    const currentState = this.state.value;
    this.state.next({
      ...currentState,
      isCartSidebarOpen: open
    });
  }

  // Resetear estado
  resetState(): void {
    this.state.next(this.initialState);
  }

  // Obtener userId
  getUserId(): number {
    return this.state.value.userId;
  }

  // Actualizar userId (útil para login/logout)
  updateUserId(userId: number): void {
    const currentState = this.state.value;
    this.state.next({
      ...currentState,
      userId
    });
  }
}
