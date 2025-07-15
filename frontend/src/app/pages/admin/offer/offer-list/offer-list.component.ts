import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../../../core/services/offer.service';
import { Offer } from '../../../../core/models/offer.interface';
import { OfferFormComponent } from '../offer-form/offer-form.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-offer-list',
  standalone: true,
  imports: [OfferFormComponent, DatePipe],
  templateUrl: './offer-list.component.html',
  styleUrl: './offer-list.component.css'
})
export class OfferListComponent implements OnInit {
  ofertas: Offer[] = [];

  constructor(private offerService: OfferService) {}

  ngOnInit(): void {
    this.obtenerOfertas();
  }

  obtenerOfertas(): void {
    this.offerService.obtenerOfertas().subscribe({
      next: (ofertas: Offer[]) => {
        this.ofertas = ofertas;
      },
      error: (err) => {
        console.error('Error al obtener ofertas', err);
      }
    });
  }

  editarOferta(oferta: Offer): void {
    // Lógica para editar la oferta
    console.log('Editar');
  }

  eliminarOferta(oferta: Offer): void {
    // Lógica para eliminar la oferta
    console.log('Eliminar');
  }
}
