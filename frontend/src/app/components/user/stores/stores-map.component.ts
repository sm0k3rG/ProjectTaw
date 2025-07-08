import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';

interface Store {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  latitude?: number;
  longitude?: number;
  distance?: number;
}

@Component({
  selector: 'app-stores-map',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stores-map.component.html',
  styleUrls: ['./stores-map.component.css']
})
export class StoresMapComponent implements OnInit, AfterViewInit {
  stores: Store[] = [
    {
      id: 1,
      name: 'Sucursal Centro Arica',
      address: 'Av. 18 de Septiembre 123, Arica',
      phone: '+56 58 2345 6789',
      hours: 'Lun-Vie: 9:00-21:00, Sáb: 9:00-18:00'
    },
    {
      id: 2,
      name: 'Sucursal Mall Plaza Arica',
      address: 'Av. Santa María 456, Arica',
      phone: '+56 58 2345 6790',
      hours: 'Lun-Vie: 9:00-21:00, Sáb: 9:00-18:00'
    },
    {
      id: 3,
      name: 'Sucursal Terminal Agropecuario',
      address: 'Av. Diego Portales 789, Arica',
      phone: '+56 58 2345 6791',
      hours: 'Lun-Vie: 9:00-21:00, Sáb: 9:00-18:00'
    },
    {
      id: 4,
      name: 'Sucursal Azapa',
      address: 'Camino Azapa 321, Valle de Azapa',
      phone: '+56 58 2345 6792',
      hours: 'Lun-Vie: 9:00-21:00, Sáb: 9:00-18:00'
    },
    {
      id: 5,
      name: 'Sucursal Chinchorro',
      address: 'Almirante Latorre 653, Arica',
      phone: '+56 58 2345 6793',
      hours: 'Lun-Vie: 9:00-21:00, Sáb: 9:00-18:00'
    }
  ];

    @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;

  filteredStores: Store[] = [];
  selectedStore: Store | null = null;
  searchAddress: string = '';
  userLocation: { lat: number; lng: number } | null = null;
  map: any = null;
  markers: any[] = [];
  userMarker: any = null;
  infoWindow: any = null;

    ngOnInit(): void {
    this.filteredStores = [...this.stores];
    this.getUserLocation();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadGoogleMaps();
    }, 100);
  }

  loadGoogleMaps(): void {
    if (!this.mapContainer) {
      setTimeout(() => this.loadGoogleMaps(), 100);
      return;
    }

    if (typeof google !== 'undefined' && google.maps) {
      this.initMap();
      return;
    }

    // Elimina cualquier script previo para evitar duplicados
    const prevScript = document.getElementById('google-maps-script');
    if (prevScript) prevScript.remove();

    // Usa la clave del environment
    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      this.initMap();
    };
    script.onerror = () => {
      console.error('Error cargando Google Maps API');
      this.showMapError();
    };
    document.head.appendChild(script);
  }

    showMapError(): void {
    // Mostrar mensaje de error
    if (this.mapContainer) {
      this.mapContainer.nativeElement.innerHTML = `
        <div class="d-flex justify-content-center align-items-center h-100 bg-light">
          <div class="text-center">
            <i class="bi bi-exclamation-triangle text-warning display-4"></i>
            <h5 class="text-muted mt-3">Error cargando el mapa</h5>
            <p class="text-muted">No se pudo cargar el mapa. Verifica tu conexión a internet.</p>
          </div>
        </div>
      `;
    }
  }



    initMap(): void {
    if (!this.mapContainer) return;
    const center = this.userLocation || { lat: -18.4783, lng: -70.3126 };
    const mapOptions = {
      center: { lat: center.lat, lng: center.lng },
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        }
      ]
    };
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
    this.infoWindow = new google.maps.InfoWindow();
    if (this.userLocation) {
      this.addUserMarker();
    }
    this.geocodeAllStores();
  }

  geocodeAllStores(): void {
    const geocoder = new (window as any).google.maps.Geocoder();
    this.stores.forEach((store, idx) => {
      geocoder.geocode({ address: store.address }, (results: any, status: any) => {
        if (status === 'OK' && results && results[0]) {
          store.latitude = results[0].geometry.location.lat();
          store.longitude = results[0].geometry.location.lng();
          this.addStoreMarker(store);
        } else {
          console.error('No se pudo geocodificar la dirección:', store.address, status);
        }
        if (idx === this.stores.length - 1) {
          this.calculateDistances();
        }
      });
    });
  }

  addStoreMarker(store: Store): void {
    if (!this.map || !store.latitude || !store.longitude) return;
    const marker = new google.maps.Marker({
      position: { lat: store.latitude, lng: store.longitude },
      map: this.map,
      title: store.name,
      icon: {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#0d6efd"/>
          </svg>
        `),
        scaledSize: new google.maps.Size(24, 24)
      }
    });
    const infoContent = `
      <div style="padding: 10px; max-width: 250px;">
        <h6 style="margin: 0 0 8px 0; color: #0d6efd; font-size: 14px;">${store.name}</h6>
        <p style="margin: 0 0 5px 0; font-size: 12px; color: #6c757d;">📍 ${store.address}</p>
        <p style="margin: 0 0 5px 0; font-size: 12px; color: #6c757d;">📞 ${store.phone}</p>
        <p style="margin: 0 0 8px 0; font-size: 12px; color: #6c757d;">🕒 ${store.hours}</p>
        ${store.distance ? `<span style="background-color: #198754; color: white; padding: 2px 8px; border-radius: 12px; font-size: 11px;">${this.getDistanceText(store.distance)}</span>` : ''}
      </div>
    `;
    marker.addListener('click', () => {
      this.selectStore(store);
      this.infoWindow.setContent(infoContent);
      this.infoWindow.open(this.map, marker);
    });
    this.markers.push(marker);
  }

  addUserMarker(): void {
    if (!this.map || !this.userLocation) return;

    this.userMarker = new google.maps.Marker({
      position: { lat: this.userLocation.lat, lng: this.userLocation.lng },
      map: this.map,
      title: 'Tu ubicación',
      icon: {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#198754" stroke="white" stroke-width="2"/>
            <circle cx="12" cy="8" r="3" fill="white"/>
            <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="white"/>
          </svg>
        `),
        scaledSize: new google.maps.Size(24, 24)
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
          this.calculateDistances();
          if (this.map) {
            this.map.setCenter({ lat: this.userLocation.lat, lng: this.userLocation.lng });
            this.addUserMarker();
          }
        },
        (error) => {
          console.log('Error obteniendo ubicación:', error);
          if (error.code === error.PERMISSION_DENIED) {
            alert('Debes permitir el acceso a la ubicación para ver sucursales cercanas.');
          }
          // Ubicación por defecto (Arica centro)
          this.userLocation = { lat: -18.4783, lng: -70.3126 };
          this.calculateDistances();
          if (this.map) {
            this.map.setCenter({ lat: this.userLocation.lat, lng: this.userLocation.lng });
            this.addUserMarker();
          }
        }
      );
    } else {
      // Ubicación por defecto si no hay geolocalización
      this.userLocation = { lat: -18.4783, lng: -70.3126 };
      this.calculateDistances();
      if (this.map) {
        this.map.setCenter({ lat: this.userLocation.lat, lng: this.userLocation.lng });
        this.addUserMarker();
      }
    }
  }

  updateMapCenter(): void {
    if (this.map && this.userLocation) {
      this.map.setCenter({ lat: this.userLocation.lat, lng: this.userLocation.lng });
    }
  }

  calculateDistances(): void {
    if (!this.userLocation) return;

    this.stores.forEach(store => {
      store.distance = this.calculateDistance(
        this.userLocation!.lat,
        this.userLocation!.lng,
        store.latitude || 0,
        store.longitude || 0
      );
    });

    this.filteredStores = [...this.stores].sort((a, b) =>
      (a.distance || 0) - (b.distance || 0)
    );
  }

  calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Radio de la Tierra en km
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c; // Distancia en km
    return Math.round(distance * 100) / 100; // Redondear a 2 decimales
  }

  deg2rad(deg: number): number {
    return deg * (Math.PI/180);
  }

  searchByAddress(): void {
    if (!this.searchAddress.trim()) {
      this.filteredStores = [...this.stores];
      return;
    }

    // Simular búsqueda por dirección
    const searchTerm = this.searchAddress.toLowerCase();
    this.filteredStores = this.stores.filter(store =>
      store.name.toLowerCase().includes(searchTerm) ||
      store.address.toLowerCase().includes(searchTerm)
    );

    // Si no hay resultados, mostrar todas las sucursales
    if (this.filteredStores.length === 0) {
      this.filteredStores = [...this.stores];
    }
  }

  selectStore(store: Store): void {
    this.selectedStore = store;
  }

  clearSelection(): void {
    this.selectedStore = null;
  }

  getDistanceText(distance: number | undefined): string {
    if (!distance) return '';
    return `${distance} km`;
  }


}
