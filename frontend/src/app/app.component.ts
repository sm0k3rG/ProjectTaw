import { Component, OnInit } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { CartService } from './services/cart.service';
import { CartSidebarComponent } from './pages/user/cart/cart-sidebar/cart-sidebar.component';
import { DeliveryTypeSidebarComponent } from './pages/user/delivery-type-sidebar/delivery-type-sidebar.component';
import { AppStateService, AppState } from './services/app-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CartSidebarComponent,
    DeliveryTypeSidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Tienda Online';
  appState: AppState;

  constructor(
    private cartService: CartService,
    private appStateService: AppStateService
  ) {
    this.appState = this.appStateService.getCurrentState();
    this.appStateService.getState().subscribe(state => {
      this.appState = state;
    });
    this.cartService.getCartItems().subscribe(items => {
      this.appStateService.updateCartItemCount(this.cartService.getTotalItems());
    });
  }

  ngOnInit() {
    // No establecer valores por defecto, dejar que el usuario ingrese la información
  }

  onDeliveryTypeChange(tipo: 'retiro' | 'delivery') {
    this.appStateService.updateDeliveryType(tipo);
    console.log('Tipo de entrega cambiado a:', tipo);
  }

  onStoreChange(store: any) {
    this.appStateService.updateSelectedStore(store);
    console.log('Tienda seleccionada:', store);
  }

  onAddressChange(address: any) {
    this.appStateService.updateDeliveryAddress(address);
    console.log('Dirección de entrega actualizada:', address);
  }

  // Getters para el template
  get selectedDeliveryType(): 'retiro' | 'delivery' {
    return this.appState.selectedDeliveryType;
  }

  get selectedStore(): any {
    return this.appState.selectedStore;
  }

  get deliveryAddress(): any {
    return this.appState.deliveryAddress;
  }

  get cartItemCount(): number {
    return this.appState.cartItemCount;
  }

  get showDeliverySidebar(): boolean {
    return this.appState.isDeliverySidebarOpen;
  }

  set showDeliverySidebar(value: boolean) {
    this.appStateService.toggleDeliverySidebar(value);
  }
}
