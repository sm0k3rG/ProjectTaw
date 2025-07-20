import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChileGeoService, Region, Comuna } from '../../../services/chile-geo.service';
import { DeliveryService, DeliveryAddress } from '../../../services/delivery.service';
import { Router } from '@angular/router';

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

  // Para regiones y comunas
  regiones: Region[] = [];
  comunas: Comuna[] = [];
  selectedRegion: Region | null = null;
  loadingRegiones = false;
  loadingComunas = false;

  constructor(
    private chileGeoService: ChileGeoService,
    private deliveryService: DeliveryService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.loadStores();
  }

  loadStores(): void {
    // Inicializar con array vacío, las tiendas se cargarán desde el backend cuando esté disponible
    this.stores = [];
    this.filteredStores = [];
    console.log('Lista de tiendas inicializada (vacía)');

    // Calcular distancias después de cargar las tiendas si hay ubicación
    if (this.userLocation && this.stores.length > 0) {
      this.calculateDistances();
    }
  }

  ngOnInit(): void {
    this.getUserLocation();
    this.loadRegiones();
    this.loadStores();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedDeliveryType']) {
      this.deliveryType = this.selectedDeliveryType;
    }
    if (changes['deliveryAddress']) {
      this.address = { ...this.deliveryAddress };
    }
  }

  loadRegiones(): void {
    this.loadingRegiones = true;
    console.log('Iniciando carga de regiones...');
    this.chileGeoService.getRegiones().subscribe({
      next: (regiones) => {
        this.regiones = regiones;
        this.loadingRegiones = false;
        console.log('Regiones cargadas exitosamente:', regiones);
        console.log('Número de regiones:', regiones.length);
      },
      error: (error) => {
        console.error('Error cargando regiones:', error);
        console.error('Detalles del error:', error.message);
        this.loadingRegiones = false;
      }
    });
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

  loadComunasByRegion(regionId: number): void {
    this.loadingComunas = true;
    console.log('Haciendo petición a:', `https://apis.digital.gob.cl/dpa/regiones/${regionId}/comunas`);
    this.chileGeoService.getComunasByRegion(regionId).subscribe({
      next: (comunas) => {
        this.comunas = comunas;
        this.loadingComunas = false;
        console.log('Comunas cargadas exitosamente:', comunas);
        console.log('Número de comunas:', comunas.length);
      },
      error: (error) => {
        console.error('Error cargando comunas:', error);
        console.error('Detalles del error:', error.message);
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
        console.log('Comuna seleccionada:', selectedComuna.nombre);
      }
    }
  }

  getUserLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log('Ubicación del usuario obtenida:', this.userLocation);
          // Calcular distancias si las tiendas ya están cargadas
          if (this.stores.length > 0) {
            this.calculateDistances();
          }
        },
        (error) => {
          console.log('Error obteniendo ubicación:', error);
          if (error.code === error.PERMISSION_DENIED) {
            alert('Debes permitir el acceso a la ubicación para ver tiendas cercanas.');
          }
          // Ubicación por defecto (Arica centro)
          this.userLocation = { lat: -18.4783, lng: -70.3126 };
          console.log('Usando ubicación por defecto:', this.userLocation);
          // Calcular distancias si las tiendas ya están cargadas
          if (this.stores.length > 0) {
            this.calculateDistances();
          }
        }
      );
    } else {
      // Ubicación por defecto si no hay geolocalización
      this.userLocation = { lat: -18.4783, lng: -70.3126 };
      console.log('No hay geolocalización, usando ubicación por defecto:', this.userLocation);
      // Calcular distancias si las tiendas ya están cargadas
      if (this.stores.length > 0) {
        this.calculateDistances();
      }
    }
  }

  calculateDistances(): void {
    if (!this.userLocation || this.stores.length === 0) {
      console.log('No hay ubicación del usuario o tiendas disponibles');
      return;
    }

    console.log('Calculando distancias desde:', this.userLocation);

    this.stores.forEach(store => {
      if (typeof store.latitude === 'number' && typeof store.longitude === 'number') {
        store.distance = this.calculateDistance(
          this.userLocation!.lat,
          this.userLocation!.lng,
          store.latitude,
          store.longitude
        );
        console.log(`${store.name}: ${store.distance} km`);
      } else {
        console.warn(`Tienda ${store.name} no tiene coordenadas válidas`);
        store.distance = 999; // Distancia muy alta para que aparezca al final
      }
    });

    this.filteredStores = [...this.stores].sort((a, b) =>
      (a.distance || 999) - (b.distance || 999)
    );

    console.log('Tiendas ordenadas por distancia:', this.filteredStores.map(s => `${s.name}: ${s.distance}km`));

    // Seleccionar automáticamente la tienda más cercana
    if (this.filteredStores.length > 0) {
      const nearestStore = this.filteredStores[0];
      console.log('Seleccionando automáticamente la tienda más cercana:', nearestStore.name);
      this.selectStoreFromList(nearestStore);
      // Forzar la detección de cambios para que se actualice la vista
      this.cdr.detectChanges();

      // Pequeño delay para asegurar que la vista se actualice correctamente
      setTimeout(() => {
        this.cdr.detectChanges();
      }, 100);
    }
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

  selectStoreFromList(store: StoreWithDistance): void {
    this.selectedStore = store;
    this.storeChange.emit(store);
  }

  setType(tipo: 'retiro' | 'delivery'): void {
    this.deliveryType = tipo;
    this.deliveryTypeChange.emit(tipo);
  }

  saveAddress(): void {
    if (this.deliveryType === 'delivery') {
      // Validar que los campos requeridos estén completos
      if (!this.address.direccion || !this.address.numero) {
        alert('Por favor completa la dirección y número');
        return;
      }

      // Guardar dirección en el backend
      this.deliveryService.saveDeliveryAddress(this.address).subscribe({
        next: (savedAddress) => {
          console.log('Dirección guardada exitosamente:', savedAddress);
          this.addressChange.emit(this.address);
          alert('Dirección guardada exitosamente');
        },
        error: (error) => {
          console.error('Error guardando dirección:', error);
          // Aún así emitir el evento para que el componente padre sepa que se guardó
          this.addressChange.emit(this.address);
          alert('Dirección guardada localmente');
        }
      });
    }
  }

  goToMap(): void {
    // Implementar navegación al mapa si es necesario
    console.log('Navegando al mapa...');
  }

  getDistanceText(distance: number | undefined): string {
    if (distance === undefined || distance === null) return '';
    if (distance < 1) return `${Math.round(distance * 1000)}m`;
    return `${distance.toFixed(1)}km`;
  }

  private calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Radio de la Tierra en km
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distancia en km
    return distance;
  }

  private deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  onlyNumbers(event: KeyboardEvent): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  validateNumber(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    // Remover caracteres no numéricos
    const numericValue = value.replace(/[^0-9]/g, '');

    if (value !== numericValue) {
      target.value = numericValue;
    }
  }
}
