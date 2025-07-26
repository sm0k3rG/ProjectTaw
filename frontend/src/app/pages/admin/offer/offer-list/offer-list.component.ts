import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { OfferService } from '../../../../core/services/offer.service';
import { Offer, OfertaEstado } from '../../../../core/models/offer.interface';
import { CommonModule, DatePipe } from '@angular/common';
import { OfferAddComponent } from "../offer-add/offer-add.component";
import { OfferEditComponent } from "../offer-edit/offer-edit.component";
import Swal from 'sweetalert2';
import { interval, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgbPaginationConfig, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offer-list',
  standalone: true,
  imports: [DatePipe, OfferAddComponent, OfferEditComponent, CommonModule, FormsModule, NgbPaginationModule],
  providers: [NgbPaginationConfig],
  templateUrl: './offer-list.component.html',
  styleUrl: './offer-list.component.css'
})
export class OfferListComponent implements OnInit, OnDestroy {
  // Propiedades de paginación
  page = 1;
  pageSize = 10; // Ofertas por página
  totalItems = 0; // Total de ofertas (se actualizará dinámicamente)

  // Arreglo donde se almacenan las ofertas obtenidas del servicio
  ofertas: Offer[] = [];
  
  // Arreglo filtrado de ofertas
  ofertasFiltradas: Offer[] = [];
  
  // Referencia al enum para usar en el template
  OfertaEstado = OfertaEstado;

  // Filtro de estado
  estadoSeleccionado: string = '';

  // Referencia al componente de agregar oferta
  @ViewChild(OfferAddComponent) offerAddComponent!: OfferAddComponent;

  // Suscripción para actualización automática
  private autoUpdateSubscription?: Subscription;

  // Inyección del servicio que permite obtener las ofertas
  constructor(
    private offerService: OfferService,
    config: NgbPaginationConfig
  ) {
    config.size = 'md';
    config.boundaryLinks = true;
  }

   /**
   * Indica si se están cargando los productos.
   */
   cargando: boolean = false;

    /**
   * Mensaje de estado para mostrar al usuario.
   */
  mostrarMensajeExito: boolean = false;

  /**
   * Retorna la clase CSS para el color del estado de la oferta
   * @param estado - Estado de la oferta
   */
  getEstadoColor(estado: OfertaEstado): string {
    switch (estado) {
      case OfertaEstado.ACTIVA:
        return 'bg-success text-white';
      case OfertaEstado.INACTIVA:
        return 'bg-warning text-dark';
      case OfertaEstado.EXPIRADA:
        return 'bg-danger text-white';
      default:
        return 'bg-secondary text-white';
    }
  }

  /**
   * Actualiza los estados de las ofertas automáticamente
   */
  actualizarEstadosAutomaticamente(): void {
    this.offerService.actualizarEstadosAutomaticamente().subscribe({
      next: (response) => {
        Swal.fire('Éxito', response.mensaje, 'success');
        this.obtenerOfertas(); // Recargar la lista
      },
      error: (error) => {
        Swal.fire('Error', 'Error al actualizar estados automáticamente', 'error');
      }
    });
  }

  /**
   * Método para manejar cuando se agrega una oferta exitosamente
   */
  onOfertaAgregada(): void {
    this.obtenerOfertasConActualizacion(); // Recargar la lista con actualización automática
    
    // Mostrar mensaje de éxito
    this.mostrarMensajeExito = true;
    setTimeout(() => {
      this.mostrarMensajeExito = false;
    }, 3000); // Ocultar después de 3 segundos
  }

  /**
   * Método para manejar cuando se oculta el modal
   */
  onModalHidden(): void {
    // Limpiar el backdrop manualmente si queda visible
    setTimeout(() => {
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
      // Remover la clase modal-open del body
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }, 100);
  }

  /**
   * Método para formatear fechas correctamente sin problemas de zona horaria
   */
  formatearFecha(fecha: string | Date): string {
    if (!fecha) return '';
    
    const date = new Date(fecha);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }

  /**
   * Método para aplicar filtros a las ofertas
   */
  aplicarFiltros(): void {
    this.ofertasFiltradas = this.ofertas.filter(oferta => {
      if (this.estadoSeleccionado && oferta.estado !== this.estadoSeleccionado) {
        return false;
      }
      return true;
    });
    
    // Actualizar el total de elementos para la paginación
    this.totalItems = this.ofertasFiltradas.length;
    
    // Resetear a la primera página cuando se aplican filtros
    this.page = 1;
  }

  /**
   * Método para manejar el cambio de filtro de estado
   */
  onCambiarEstado(event: any): void {
    this.estadoSeleccionado = event.target.value;
    this.aplicarFiltros();
  }

  /**
   * Método para limpiar todos los filtros
   */
  limpiarFiltros(): void {
    this.estadoSeleccionado = '';
    this.aplicarFiltros();
  }

  /**
   * Método para manejar cambios de página
   */
  onCambiarPagina(page: number): void {
    this.page = page;
  }

  // Al inicializar el componente, se obtienen las ofertas con actualización automática
  ngOnInit(): void {
    this.obtenerOfertasConActualizacion();
    
    // Configurar actualización automática cada 5 minutos (300000 ms)
    this.autoUpdateSubscription = interval(300000).subscribe(() => {
      this.obtenerOfertasConActualizacion();
    });
  }

  // Limpiar suscripciones al destruir el componente
  ngOnDestroy(): void {
    if (this.autoUpdateSubscription) {
      this.autoUpdateSubscription.unsubscribe();
    }
  }

  // Llama al servicio para obtener las ofertas y las asigna al arreglo
  obtenerOfertas(): void {
    this.cargando = true;
    this.offerService.obtenerOfertas().subscribe({
      next: (ofertas: Offer[]) => {
        this.ofertas = ofertas;
        this.aplicarFiltros();
        this.cargando = false;
      },
      error: (err) => {
        // Manejo de errores al obtener las ofertas
        console.error('Error al obtener ofertas', err);
        this.cargando = false;
      }
    });
  }

  // Obtener ofertas con actualización automática de estados
  obtenerOfertasConActualizacion(): void {
    this.cargando = true;
    
    // Primero actualizar estados automáticamente
    this.offerService.actualizarEstadosAutomaticamente().subscribe({
      next: () => {
        // Luego obtener las ofertas actualizadas
        this.obtenerOfertas();
      },
      error: (error) => {
        console.error('Error al actualizar estados automáticamente', error);
        // Si falla la actualización, obtener ofertas de todas formas
        this.obtenerOfertas();
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

