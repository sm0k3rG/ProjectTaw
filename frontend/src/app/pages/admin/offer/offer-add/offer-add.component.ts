import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OfferService } from '../../../../core/services/offer.service';
import { CreateOfferDto } from '../../../../core/models/offer.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './offer-add.component.html',
  styleUrl: './offer-add.component.css'
})
export class OfferAddComponent {
  @Output() ofertaAgregada = new EventEmitter<void>();
  
  offerForm: FormGroup;
  loading = false;
  mensajeError: string | null = null;
  mensajeExito: string | null = null;
  hoy: string = new Date().toISOString().split('T')[0];

  // Validador personalizado para verificar que la fecha fin sea posterior a la fecha inicio
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
    private offerService: OfferService,
    private router: Router
  ) {
    this.offerForm = this.fb.group({
      porcentaje: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      descripcion: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', [Validators.required, this.fechaFinValidator.bind(this)]]
    });

    // Escuchar cambios en fechaInicio para revalidar fechaFin
    this.offerForm.get('fechaInicio')?.valueChanges.subscribe(() => {
      this.offerForm.get('fechaFin')?.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.offerForm.invalid) {
      // Marcar todos los campos como touched para mostrar errores
      Object.keys(this.offerForm.controls).forEach(key => {
        const control = this.offerForm.get(key);
        control?.markAsTouched();
      });
      
      this.mensajeError = 'Por favor complete todos los campos correctamente.';
      return;
    }

    this.loading = true;
    this.mensajeError = null;

    // Convertir las fechas a formato ISO completo para evitar problemas de zona horaria
    const fechaInicioISO = new Date(this.offerForm.value.fechaInicio + 'T00:00:00').toISOString();
    const fechaFinISO = new Date(this.offerForm.value.fechaFin + 'T23:59:59').toISOString();

    const ofertaData: CreateOfferDto = {
      porcentaje: this.offerForm.value.porcentaje,
      descripcion: this.offerForm.value.descripcion,
      fechaInicio: fechaInicioISO,
      fechaFin: fechaFinISO
    };

    this.offerService.crearOferta(ofertaData).subscribe({
      next: (response) => {
        this.mensajeExito = 'Oferta agregada con éxito';
        this.loading = false;
        this.offerForm.reset();
        
        // Emitir evento para notificar al componente padre
        this.ofertaAgregada.emit();
        
        setTimeout(() => {
          this.mensajeExito = null;
          // Cerrar el modal automáticamente
          const modal = document.getElementById('modalAgregarOferta');
          if (modal) {
            // @ts-ignore
            const modalInstance = bootstrap.Modal.getInstance(modal);
            if (modalInstance) {
              modalInstance.hide();
            } else {
              // Si no se puede obtener la instancia, usar el método alternativo
              // @ts-ignore
              const newModalInstance = new bootstrap.Modal(modal);
              newModalInstance.hide();
            }
          }
          
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
        }, 2000);
      },
      error: (error) => {
        this.loading = false;
        this.mensajeError = error.error?.message || 'Error al crear la oferta';
        setTimeout(() => this.mensajeError = null, 5000);
      }
    });
  }
}
