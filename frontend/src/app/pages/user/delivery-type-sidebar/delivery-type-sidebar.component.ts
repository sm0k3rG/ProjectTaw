import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChileGeoService, Region, Comuna } from '../../../services/chile-geo.service';
import { DeliveryService, DeliveryAddress } from '../../../services/delivery.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { Store, StoresService } from '../stores/stores.service';

interface StoreWithDistance {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  latitude: number;
  longitude: number;
  isActive: boolean;
  region: string;
  comuna: string;
  distance?: number;
}

@Component({
  selector: 'app-delivery-type-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delivery-type-sidebar.component.html',
  styleUrls: ['./delivery-type-sidebar.component.css']
})
export class DeliveryTypeSidebarComponent implements OnInit, OnChanges {
  @Input() show = false;
  @Input() selectedDeliveryType: 'retiro' | 'delivery' = 'retiro';
  @Input() selectedStore: StoreWithDistance | null = null;
  @Input() deliveryAddress: any = {};
  @Output() closeSidebar = new EventEmitter<void>();
  @Output() deliveryTypeChange = new EventEmitter<'retiro' | 'delivery'>();
  @Output() storeChange = new EventEmitter<StoreWithDistance | null>();
  @Output() addressChange = new EventEmitter<any>();

  deliveryType: 'retiro' | 'delivery' = 'retiro';
  address: any = {};
  searchTerm: string = '';
  stores: StoreWithDistance[] = [];
  filteredStores: StoreWithDistance[] = [];
  userLocation: { lat: number; lng: number } | null = null;

  regiones: Region[] = [];
  comunas: Comuna[] = [];
  selectedRegion: Region | null = null;
  loadingRegiones = false;
  loadingComunas = false;

  userAddresses: DeliveryAddress[] = [];
  isAuthenticated = false;

  constructor(
    private chileGeoService: ChileGeoService,
    private deliveryService: DeliveryService,
    private authService: AuthService,
    private storesService: StoresService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.loadStores();
  }

  ngOnInit(): void {
    this.getUserLocation();
    this.loadRegiones();
    this.loadStores();

    this.isAuthenticated = this.authService.isAuthenticated();
    if (this.isAuthenticated) {
      this.deliveryService.userAddresses$.subscribe(addresses => {
        this.userAddresses = addresses;
      });
      this.deliveryService.loadUserAddresses();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedDeliveryType']) {
      this.deliveryType = this.selectedDeliveryType;
    }
    if (changes['deliveryAddress']) {
      this.address = { ...this.deliveryAddress };
    }
  }

  selectSavedAddress(addr: DeliveryAddress): void {
    this.address = { ...addr };
  }

  handleOverlayClick(event: MouseEvent) {
    const sidebar = document.querySelector('.delivery-sidebar');
    if (sidebar && !sidebar.contains(event.target as Node)) {
      this.closeSidebar.emit();
    }
  }

  setType(tipo: 'retiro' | 'delivery'): void {
    this.deliveryType = tipo;
    this.deliveryTypeChange.emit(tipo);
  }

  loadStores(): void {
    this.stores = [];
    this.filteredStores = [];
    this.storesService.getStores().subscribe({
      next: (stores: any[]) => {
        this.stores = stores;
        this.filteredStores = stores;
        if (this.userLocation && this.stores.length > 0) {
          this.calculateDistances();
        }
        console.log(this.stores);
      },
      error: () => {
        this.stores = [];
        this.filteredStores = [];
      }
    });
  }

  getUserLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          if (this.stores.length > 0) {
            this.calculateDistances();
          }
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            alert('Debes permitir el acceso a la ubicación para ver tiendas cercanas.');
          }
          this.userLocation = { lat: -18.4783, lng: -70.3126 };
          if (this.stores.length > 0) {
            this.calculateDistances();
          }
        }
      );
    } else {
      this.userLocation = { lat: -18.4783, lng: -70.3126 };
      if (this.stores.length > 0) {
        this.calculateDistances();
      }
    }
  }

  calculateDistances(): void {
    if (!this.userLocation || this.stores.length === 0) return;

    this.stores.forEach(store => {
      if (typeof store.latitude === 'number' && typeof store.longitude === 'number') {
        store.distance = this.calculateDistance(
          this.userLocation!.lat,
          this.userLocation!.lng,
          store.latitude,
          store.longitude
        );
      } else {
        store.distance = 999;
      }
    });

    this.filteredStores = [...this.stores].sort((a, b) =>
      (a.distance || 999) - (b.distance || 999)
    );

    if (this.filteredStores.length > 0) {
      const nearestStore = this.filteredStores[0];
      this.selectStoreFromList(nearestStore);
      this.cdr.detectChanges();
      setTimeout(() => this.cdr.detectChanges(), 100);
    }
  }

  selectStoreFromList(store: StoreWithDistance): void {
    this.selectedStore = store;
    this.storeChange.emit(store);
  }

  filterStores(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredStores = this.stores
      .filter(store =>
        store.name.toLowerCase().includes(term) ||
        store.address.toLowerCase().includes(term) ||
        store.region.toLowerCase().includes(term) ||
        store.comuna.toLowerCase().includes(term)
      )
      .sort((a, b) => (a.distance || 999) - (b.distance || 999));
  }

  onSearchChange(): void {
    this.filterStores();
  }

  onRegionChange(regionId: string): void {
    if (regionId && regionId !== '') {
      const regionIdNum = parseInt(regionId);
      const selectedRegion = this.regiones.find(r => r.id === regionIdNum);

      if (selectedRegion) {
        this.selectedRegion = selectedRegion;
        this.address.region = selectedRegion.nombre;
        this.address.comuna = '';
        this.comunas = [];
        this.loadComunasByRegion(regionIdNum);
      }
    }
  }

  loadRegiones(): void {
    this.loadingRegiones = true;
    this.chileGeoService.getRegiones().subscribe({
      next: (regiones) => {
        this.regiones = regiones;
        this.loadingRegiones = false;
      },
      error: () => {
        this.loadingRegiones = false;
      }
    });
  }

  loadComunasByRegion(regionId: number): void {
    this.loadingComunas = true;
    this.chileGeoService.getComunasByRegion(regionId).subscribe({
      next: (comunas) => {
        this.comunas = comunas;
        this.loadingComunas = false;
      },
      error: () => {
        this.loadingComunas = false;
      }
    });
  }

  onComunaChange(comunaId: string): void {
    if (comunaId && comunaId !== '') {
      const comunIdNum = parseInt(comunaId);
      const selectedComuna = this.comunas.find(c => c.id === comunIdNum);

      if (selectedComuna) {
        this.address.comuna = selectedComuna.nombre;
      }
    }
  }

  saveAddress(): void {
    if (this.deliveryType === 'delivery') {
      if (!this.address.direccion || !this.address.numero || !this.address.comuna) {
        alert('Por favor completa todos los campos requeridos');
        return;
      }

      this.closeSidebar.emit();

      this.deliveryService.saveDeliveryAddress(this.address).subscribe({
        next: (savedAddress) => {
          this.addressChange.emit(this.address);
        },
        error: () => {
          this.addressChange.emit(this.address);
        }
      });
    }
  }

  getDistanceText(distance: number | undefined): string {
    if (distance === undefined || distance === null) return '';
    if (distance < 1) return `${Math.round(distance * 1000)}m`;
    return `${distance.toFixed(1)}km`;
  }

  private calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371;
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  }

  private deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  onlyNumbers(event: KeyboardEvent): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  validateNumber(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const numericValue = value.replace(/[^0-9]/g, '');
    if (value !== numericValue) {
      target.value = numericValue;
    }
  }
}
