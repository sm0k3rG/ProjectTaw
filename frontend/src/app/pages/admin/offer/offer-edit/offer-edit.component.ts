import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offer-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './offer-edit.component.html',
  styleUrl: './offer-edit.component.css'
})
export class OfferEditComponent {
  offerForm: FormGroup;
  loading = false;
  mensajeError: string | null = null;
  mensajeExito: string | null = null;
  hoy: string = new Date().toISOString().split('T')[0];

  constructor(private fb: FormBuilder) {
    this.offerForm = this.fb.group({
      porcentaje: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      descripcion: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required]
    });
    // Aquí en el futuro se podrá cargar la oferta a editar y setear los valores en el formulario
    // Por ejemplo: this.offerForm.patchValue({ ... });
  }

  onSubmit() {
    if (this.offerForm.invalid) {
      this.mensajeError = 'Por favor complete todos los campos correctamente.';
      return;
    }
    this.loading = true;
    this.mensajeError = null;
    // Aquí iría la lógica para actualizar la oferta en el backend
    setTimeout(() => {
      this.mensajeExito = 'Oferta actualizada con éxito';
      this.loading = false;
      setTimeout(() => this.mensajeExito = null, 3000);
    }, 1000);
  }
}