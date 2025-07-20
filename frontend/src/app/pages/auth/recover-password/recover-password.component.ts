import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-recover-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.css'
})
export class RecoverPasswordComponent {
  recuperarForm: FormGroup;
  isLoading = false;
  emailEnviado = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.recuperarForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  enviarSolicitudRecuperacion() {
    if (this.recuperarForm.valid) {
      this.isLoading = true;
      const { email } = this.recuperarForm.value;

      this.authService.solicitarRecuperacionContraseña(email).subscribe({
        next: () => {
          this.isLoading = false;
          this.emailEnviado = true;
          Swal.fire({
            icon: 'success',
            title: '¡Solicitud enviada!',
            text: 'Se ha enviado un enlace de recuperación a tu correo electrónico.',
            confirmButtonText: 'Entendido',
            confirmButtonColor: '#0071ce'
          });
        },
        error: (error) => {
          this.isLoading = false;
          let mensajeError = 'Error al enviar la solicitud de recuperación';

          if (error.status === 404) {
            mensajeError = 'No se encontró una cuenta con este correo electrónico';
          } else if (error.status === 429) {
            mensajeError = 'Demasiadas solicitudes. Intenta nuevamente en unos minutos';
          }

          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: mensajeError,
            confirmButtonText: 'Entendido',
            confirmButtonColor: '#dc3545'
          });
        }
      });
    } else {
      this.marcarFormularioComoTocado();
      Swal.fire({
        icon: 'error',
        title: 'Error de validación',
        text: 'Por favor, ingresa un correo electrónico válido',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#dc3545'
      });
    }
  }

  volverAlLogin() {
    this.router.navigate(['/auth/login']);
  }

  private marcarFormularioComoTocado() {
    Object.keys(this.recuperarForm.controls).forEach((key) => {
      const control = this.recuperarForm.get(key);
      control?.markAsTouched();
    });
  }

  get email() {
    return this.recuperarForm.get('email');
  }
}
