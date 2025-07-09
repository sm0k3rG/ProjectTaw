import { Component } from '@angular/core';
import { OfferFormComponent } from '../offer-form/offer-form.component';

interface Oferta {
  id: number;
  nombre: string;
  descripcion: string;
  sucursal: string;
  descuento: string;
  periodoInicio: string;
  periodoFin: string;
  estado: 'Activa' | 'Expirada';
}

@Component({
  selector: 'app-offer-list',
  standalone: true,
  imports: [OfferFormComponent],
  templateUrl: './offer-list.component.html',
  styleUrl: './offer-list.component.css'
})
export class OfferListComponent {
  ofertas: Oferta[] = [
    {
      id: 1,
      nombre: 'Black Friday Electrónicos',
      descripcion: 'Descuento especial en todos los productos electrónicos',
      sucursal: 'Sucursal 1',
      descuento: '25% OFF',
      periodoInicio: '2024-11-25',
      periodoFin: '2024-11-30',
      estado: 'Activa'
    },
    {
      id: 2,
      nombre: 'Oferta Bebidas',
      descripcion: '2x1 en bebidas seleccionadas',
      sucursal: 'Sucursal 2',
      descuento: '50% OFF',
      periodoInicio: '2024-01-01',
      periodoFin: '2024-01-31',
      estado: 'Expirada'
    },
    {
      id: 3,
      nombre: 'Descuento Calzado',
      descripcion: '$20 de descuento en calzado deportivo',
      sucursal: 'Sucursal 1',
      descuento: '20$ OFF',
      periodoInicio: '2024-12-01',
      periodoFin: '2024-12-31',
      estado: 'Activa'
    }
  ];
}
