import { StoreWithDistance } from './../../../models/store.model';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChileGeoService, Region, Comuna } from '../../../services/chile-geo.service';
import { DeliveryService, DeliveryAddress } from '../../../services/delivery.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { StoresService } from '../stores/stores.service';
import { environment } from '../../../../environments/enviornment';
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
  editAddress = false;
    showAddressForm = false;

  constructor(
    private chileGeoService: ChileGeoService,
    private deliveryService: DeliveryService,
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private storesService: StoresService
  ) {
    this.loadStores();
  }

  ngOnInit(): void {
  console.log('ngOnInit ejecutado');
  this.getUserLocation();
  this.loadRegiones();
  this.loadStores();

  this.isAuthenticated = this.authService.isAuthenticated();
  console.log('isAuthenticated:', this.isAuthenticated);

  if (this.isAuthenticated) {
    this.deliveryService.userAddresses$.subscribe(addresses => {
      this.userAddresses = addresses;
      console.log('Direcciones del usuario:', addresses);
      this.editAddress = this.userAddresses.length === 0;
      this.cdr.detectChanges();
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

  localStorage.setItem('deliveryAddress', JSON.stringify(this.address));

  this.addressChange.emit(this.address);

  this.closeSidebar.emit();
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
    this.storesService.getStores().subscribe(stores => {
      this.stores = stores;
      this.filteredStores = [];
      if (this.userLocation && this.stores.length > 0) {
        this.calculateDistances();
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
      if (typeof store.latitud === 'number' && typeof store.longitud === 'number') {
        store.distancia = this.calculateDistance(
          this.userLocation!.lat,
          this.userLocation!.lng,
          store.latitud,
          store.longitud
        );
      } else {
        store.distancia = 999;
      }
    });

    this.filteredStores = [...this.stores].sort((a, b) =>
      (a.distancia || 999) - (b.distancia || 999)
    );

    if (this.filteredStores.length > 0) {
      const nearestStore = this.filteredStores[0];
      this.selectStoreFromList(nearestStore);

      localStorage.setItem('pickupStore', JSON.stringify(nearestStore));

      this.cdr.detectChanges();
      setTimeout(() => this.cdr.detectChanges(), 100);
    }
  }

  

  selectStoreFromList(store: StoreWithDistance): void {
    this.selectedStore = store;
    this.storeChange.emit(store);

    localStorage.setItem('pickupStore', JSON.stringify(store));
  }

  filterStores(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredStores = this.stores
      .filter(store =>
        store.nombre.toLowerCase().includes(term) ||
        store.direccion.toLowerCase().includes(term) ||
        store.region.toLowerCase().includes(term) ||
        store.ciudad.toLowerCase().includes(term)
      )
      .sort((a, b) => (a.distancia || 999) - (b.distancia || 999));
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

    if (this.isAuthenticated) {
      const user = this.authService.getCurrentUser();
      this.address.usuarioId = user?.userId;
    }

    let payload = { ...this.address, calle: this.address.direccion };
    delete payload.direccion;

    this.deliveryService.saveDeliveryAddress(payload).subscribe({
      next: (saved) => {
        this.deliveryService.loadUserAddresses();
        this.showAddressForm = false;
      },
      error: (err) => {
        console.error('Error al guardar dirección:', err);
      },
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

  async geocodeStores(): Promise<void> {
const apiKey = environment.googleMapsApiKey;
    for (const store of this.stores) {
      const address = `${store.direccion}, ${store.region}`;
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status === 'OK' && data.results.length > 0) {
          store.latitud = data.results[0].geometry.location.lat;
          store.longitud = data.results[0].geometry.location.lng;
        } else {
          store.latitud = null;
          store.longitud = null;
        }
      } catch (error) {
        store.latitud = null;
        store.longitud = null;
      }
    }
    this.calculateDistances();
  }
}
