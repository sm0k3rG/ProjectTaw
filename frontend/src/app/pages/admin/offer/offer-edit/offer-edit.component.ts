import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OfferService } from '../../../../core/services/offer.service';
import { Offer, OfertaEstado } from '../../../../core/models/offer.interface';

@Component({
  selector: 'app-offer-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './offer-edit.component.html',
  styleUrl: './offer-edit.component.css'
})
export class OfferEditComponent implements OnInit {
  @Input() ofertaParaEditar: Offer | null = null;
  @Output() ofertaEditada = new EventEmitter<void>();
  
  offerForm: FormGroup;
  loading = false;
  mensajeError: string | null = null;
  mensajeExito: string | null = null;
  hoy: string = new Date().toISOString().split('T')[0];

  private fechaFinValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.parent) return null;
    
    const fechaInicio = control.parent.get('fechaInicio')?.value;
    const fechaFin = control.value;
    
    if (fechaInicio && fechaFin) {
      const inicio = new Date(fechaInicio);
      const fin = new Date(fechaFin);
      
      if (fin <= inicio) {
        return { fechaFinInvalida: true };
      }
    }
    return null;
  }

  constructor(
    private fb: FormBuilder,
    private offerService: OfferService
  ) {
    this.offerForm = this.fb.group({
      porcentaje: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      descripcion: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', [Validators.required, this.fechaFinValidator.bind(this)]]
    });

    this.offerForm.get('fechaInicio')?.valueChanges.subscribe(() => {
      this.offerForm.get('fechaFin')?.updateValueAndValidity();
    });
  }

  ngOnInit() {
    if (this.ofertaParaEditar) {
      this.cargarDatosOferta();
    }
  }

  ngOnChanges() {
    if (this.ofertaParaEditar) {
      this.cargarDatosOferta();
    }
  }

  cargarDatosOferta() {
    if (this.ofertaParaEditar) {
      // Formatear las fechas para el input date (YYYY-MM-DD)
      const fechaInicio = new Date(this.ofertaParaEditar.fechaInicio).toISOString().split('T')[0];
      const fechaFin = new Date(this.ofertaParaEditar.fechaFin).toISOString().split('T')[0];

      this.offerForm.patchValue({
        porcentaje: this.ofertaParaEditar.porcentaje,
        descripcion: this.ofertaParaEditar.descripcion,
        fechaInicio: fechaInicio,
        fechaFin: fechaFin
      });
    }
  }

  onSubmit() {
    if (this.offerForm.invalid) {
      Object.keys(this.offerForm.controls).forEach(key => {
        const control = this.offerForm.get(key);
        control?.markAsTouched();
      });
      this.mensajeError = 'Por favor complete todos los campos correctamente.';
      return;
    }

    if (!this.ofertaParaEditar) {
      this.mensajeError = 'No hay oferta seleccionada para editar.';
      return;
    }

    this.loading = true;
    this.mensajeError = null;

    // Convertir las fechas a formato ISO completo
    const fechaInicioISO = new Date(this.offerForm.value.fechaInicio + 'T00:00:00').toISOString();
    const fechaFinISO = new Date(this.offerForm.value.fechaFin + 'T23:59:59').toISOString();

    const ofertaData = {
      porcentaje: this.offerForm.value.porcentaje,
      descripcion: this.offerForm.value.descripcion,
      fechaInicio: fechaInicioISO,
      fechaFin: fechaFinISO
    };

    this.offerService.actualizarOferta(this.ofertaParaEditar.id, ofertaData).subscribe({
      next: (response) => {
        this.mensajeExito = 'Oferta actualizada con éxito';
        this.loading = false;
        
        this.ofertaEditada.emit(); // Emitir evento para actualizar la lista
        
        setTimeout(() => {
          this.mensajeExito = null;
          const modal = document.getElementById('modalEditarOferta');
          if (modal) {
            // @ts-ignore
            const modalInstance = bootstrap.Modal.getInstance(modal);
            if (modalInstance) {
              modalInstance.hide();
            } else {
              // @ts-ignore
              const newModalInstance = new bootstrap.Modal(modal);
              newModalInstance.hide();
            }
          }
          
          // Limpiar el backdrop manualmente
          setTimeout(() => {
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
              backdrop.remove();
            }
            document.body.classList.remove('modal-open');
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
          }, 100);
        }, 2000);
      },
      error: (error) => {
        this.loading = false;
        console.error('Error completo:', error);
        console.error('Error status:', error.status);
        console.error('Error message:', error.message);
        console.error('Error URL:', error.url);
        this.mensajeError = `Error al actualizar la oferta: ${error.status} - ${error.message}`;
        setTimeout(() => this.mensajeError = null, 5000);
      }
    });
  }
}