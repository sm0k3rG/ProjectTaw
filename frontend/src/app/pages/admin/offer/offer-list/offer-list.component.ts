import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../../../core/services/offer.service';
import { Offer } from '../../../../core/models/offer.interface';
import { DatePipe } from '@angular/common';
import { OfferAddComponent } from "../offer-add/offer-add.component";
import { OfferEditComponent } from "../offer-edit/offer-edit.component";

@Component({
  selector: 'app-offer-list',
  standalone: true,
  imports: [DatePipe, OfferAddComponent, OfferEditComponent],
  templateUrl: './offer-list.component.html',
  styleUrl: './offer-list.component.css'
})
export class OfferListComponent implements OnInit {
  // Arreglo donde se almacenan las ofertas obtenidas del servicio
  ofertas: Offer[] = [];

  // Inyección del servicio que permite obtener las ofertas
  constructor(private offerService: OfferService) {}

   /**
   * Indica si se están cargando los productos.
   */
   cargando: boolean = false;

  // Al inicializar el componente, se obtienen las ofertas
  ngOnInit(): void {
    this.obtenerOfertas();
  }

  // Llama al servicio para obtener las ofertas y las asigna al arreglo
  obtenerOfertas(): void {
    this.cargando = true;
    this.offerService.obtenerOfertas().subscribe({
      next: (ofertas: Offer[]) => {
        this.ofertas = ofertas;
        this.cargando = false;
      },
      error: (err) => {
        // Manejo de errores al obtener las ofertas
        console.error('Error al obtener ofertas', err);
      }
    });
  }

  // Método para editar una oferta (lógica pendiente de implementar)
  editarOferta(oferta: Offer): void {
    // Aquí en el futuro se podrá pasar la oferta a editar al componente hijo
    const modal = document.getElementById('modalEditarOferta');
    if (modal) {
      // Usando Bootstrap 5 para mostrar el modal
      // @ts-ignore
      const modalInstance = bootstrap.Modal.getOrCreateInstance(modal);
      modalInstance.show();
    }
  }

  // Método para eliminar una oferta (lógica pendiente de implementar)
  eliminarOferta(oferta: Offer): void {
    console.log('Eliminar');
  }
}