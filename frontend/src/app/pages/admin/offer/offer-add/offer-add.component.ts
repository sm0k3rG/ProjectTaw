import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offer-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './offer-add.component.html',
  styleUrl: './offer-add.component.css'
})
export class OfferAddComponent {
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
  }

  onSubmit() {
    if (this.offerForm.invalid) {
      this.mensajeError = 'Por favor complete todos los campos correctamente.';
      return;
    }
    this.loading = true;
    this.mensajeError = null;
    // Aquí iría la lógica para enviar la oferta al backend
    setTimeout(() => {
      this.mensajeExito = 'Oferta agregada con éxito';
      this.loading = false;
      this.offerForm.reset();
      setTimeout(() => this.mensajeExito = null, 3000);
    }, 1000);
  }
}
