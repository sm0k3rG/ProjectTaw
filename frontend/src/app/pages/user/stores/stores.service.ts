import { Injectable } from '@angular/core';

export interface Store {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  latitude: number;
  longitude: number;
}

@Injectable({ providedIn: 'root' })
export class StoresService {
  private stores: Store[] = [
    {
      id: 1,
      name: 'Sucursal Centro Arica',
      address: 'Av. 18 de Septiembre 123, Arica',
      phone: '+56 58 2345 6789',
      hours: 'Lun-Vie: 9:00-21:00, Sáb: 9:00-18:00',
      latitude: -18.4783,
      longitude: -70.3126
    },
    {
      id: 2,
      name: 'Sucursal Mall Plaza Arica',
      address: 'Av. Santa María 456, Arica',
      phone: '+56 58 2345 6790',
      hours: 'Lun-Vie: 9:00-21:00, Sáb: 9:00-18:00',
      latitude: -18.4825,
      longitude: -70.2972
    },
    {
      id: 3,
      name: 'Sucursal Terminal Agropecuario',
      address: 'Av. Diego Portales 789, Arica',
      phone: '+56 58 2345 6791',
      hours: 'Lun-Vie: 9:00-21:00, Sáb: 9:00-18:00',
      latitude: -18.4950,
      longitude: -70.2920
    },
    {
      id: 4,
      name: 'Sucursal Azapa',
      address: 'Camino Azapa 321, Valle de Azapa',
      phone: '+56 58 2345 6792',
      hours: 'Lun-Vie: 9:00-21:00, Sáb: 9:00-18:00',
      latitude: -18.5000,
      longitude: -70.2850
    },
    {
      id: 5,
      name: 'Sucursal Chinchorro',
      address: 'Almirante Latorre 653, Arica',
      phone: '+56 58 2345 6793',
      hours: 'Lun-Vie: 9:00-21:00, Sáb: 9:00-18:00',
      latitude: -18.4700,
      longitude: -70.3000
    }
  ];

  getStores(): Store[] {
    return this.stores;
  }

  getNearestStore(userLocation: { lat: number; lng: number }): Store {
    let minDist = Number.MAX_VALUE;
    let nearest: Store = this.stores[0];
    for (const store of this.stores) {
      const dist = this.calculateDistance(userLocation.lat, userLocation.lng, store.latitude, store.longitude);
      if (dist < minDist) {
        minDist = dist;
        nearest = store;
      }
    }
    return nearest;
  }

  private calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371;
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }

  private deg2rad(deg: number): number {
    return deg * (Math.PI/180);
  }
}
