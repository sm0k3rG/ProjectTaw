import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
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

  constructor(private appStateService: AppStateService, private authService: AuthService) {
    this.appState = this.appStateService.getCurrentState();
    this.user = this.authService.getCurrentUser();
  }

  ngOnInit(): void {
    this.appStateService.getState().subscribe(state => {
      this.appState = state;
    });
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
}
