import { Oferta } from './../../../../../../../backend/node_modules/.prisma/client/index.d';
import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../../../core/services/offer.service';
import { Offer } from '../../../../core/models/offer.interface';
import { CommonModule, DatePipe } from '@angular/common';
import { OfferAddComponent } from "../offer-add/offer-add.component";
import { OfferEditComponent } from "../offer-edit/offer-edit.component";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-offer-list',
  standalone: true,
  imports: [DatePipe, OfferAddComponent, OfferEditComponent, CommonModule],
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

    /**
   * Mensaje de estado para mostrar al usuario.
   */
  mensaje: string = '';
  mostrarMensaje: boolean = false;
  tipoMensaje: 'success' | 'error' = 'success';

  /**
   * Retorna la clase CSS para el color del estado del producto
   * @param estado - Estado de la oferta
   */
  getEstadoColor(estado: string): string {
    switch (estado?.toUpperCase()) {
      case 'ACTIVO':
        return 'bg-success text-white';
      case 'ELIMINADO':
        return 'bg-danger text-white';
      case 'INACTIVO':
        return 'bg-warning text-dark';
      default:
        return 'bg-secondary text-white';
    }
  }

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

  // Método para eliminar una oferta
  eliminarOferta(oferta: Offer): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Deseas eliminar la oferta ${oferta.porcentaje}% "${oferta.descripcion}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (!result.isConfirmed) return;
  
      this.offerService.eliminarOferta(oferta.id).subscribe({
        next: () => {
          Swal.fire('Eliminada', 'Oferta eliminada exitosamente.', 'success');
          this.obtenerOfertas();
        },
        error: () => {
          Swal.fire('Error', 'Hubo un error al eliminar la oferta.', 'error');
        }
      });
    });
  }
  
}

