import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, Router } from '@angular/router';
import { AppStateService, AppState } from '../../services/app-state.service';
import { DeliveryTypeSidebarComponent } from '../../pages/user/delivery-type-sidebar/delivery-type-sidebar.component';
import { AuthService } from '../../core/services/auth.service';
import { UserSidebarComponent } from '../user-sidebar/user-sidebar.component';

@Component({
  selector: 'app-main-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, DeliveryTypeSidebarComponent, UserSidebarComponent, RouterLinkActive],
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {
  appState: AppState;
  showDeliverySidebar = false;
  showUserSidebar = false;
  user: any = null;

  constructor(
    private appStateService: AppStateService,
    private authService: AuthService,
    private router: Router
  ) {
    this.appState = this.appStateService.getCurrentState();
    this.user = this.authService.getCurrentUser();
  }

  ngOnInit(): void {
    // Escucha cambios en el estado global
    this.appStateService.getState().subscribe(state => {
      this.appState = state;
    });

    // Recupera valores desde localStorage si existen
    const savedAddress = localStorage.getItem('deliveryAddress');
    if (savedAddress) {
      const address = JSON.parse(savedAddress);
      this.appStateService.updateDeliveryAddress(address);
    }

    const savedStore = localStorage.getItem('pickupStore');
    if (savedStore) {
      const store = JSON.parse(savedStore);
      this.appStateService.updateSelectedStore(store);
    }

    const savedType = localStorage.getItem('deliveryType');
    if (savedType === 'delivery' || savedType === 'retiro') {
      this.appStateService.updateDeliveryType(savedType);
    }
  }

  get selectedDeliveryType(): 'retiro' | 'delivery' {
    return this.appState.selectedDeliveryType;
  }

  get selectedStore(): any {
    return this.appState.selectedStore;
  }

  get deliveryAddress(): any {
    return this.appState.deliveryAddress;
  }

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/login']);
    window.location.reload();
  }

  onDeliveryTypeChange(tipo: 'retiro' | 'delivery') {
    this.appStateService.updateDeliveryType(tipo);
    this.showDeliverySidebar = false;
  }

  onStoreChange(store: any) {
    this.appStateService.updateSelectedStore(store);
    this.showDeliverySidebar = false;
  }

  onAddressChange(address: any) {
  this.appStateService.updateDeliveryAddress(address);
  this.showDeliverySidebar = false;
}

  toggleUserSidebar() {
    this.showUserSidebar = !this.showUserSidebar;
  }

  get isUserProductsRoute(): boolean {
    return this.router.url === '/user/products';
  }

  get shouldShowNavbar(): boolean {
    // Mostrar navbar si es cliente, administrador, o si está en la ruta /user/products
    return this.user?.role === 'Client' || 
           this.user?.role === 'Administrator' || 
           this.isUserProductsRoute;
  }
}
