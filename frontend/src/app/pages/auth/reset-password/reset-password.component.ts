import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetForm: FormGroup;
  isLoading = false;
  token: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
    this.resetForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordsMatchValidator });

    this.route.queryParams.subscribe(params => {
      this.token = params['token'] || null;
    });
  }

  passwordsMatchValidator(group: FormGroup) {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return pass === confirm ? null : { passwordMismatch: true };
  }

  enviarReset() {
    if (this.resetForm.invalid || !this.token) {
      this.resetForm.markAllAsTouched();
      Swal.fire({ icon: 'error', title: 'Error', text: 'Completa todos los campos correctamente.' });
      return;
    }
    this.isLoading = true;
    const nuevaContraseña = this.resetForm.value.password;
    // Simulación: reemplaza por llamada real al backend si es necesario
    this.authService.restablecerContraseña(this.token, nuevaContraseña).subscribe({
      next: () => {
        this.isLoading = false;
        Swal.fire({ icon: 'success', title: '¡Contraseña restablecida!', text: 'Ahora puedes iniciar sesión.', timer: 1500, showConfirmButton: false });
        this.router.navigate(['/']);
      },
      error: () => {
        this.isLoading = false;
        Swal.fire({ icon: 'error', title: 'Error', text: 'No se pudo restablecer la contraseña.' });
      }
    });
  }

  get password() {
    return this.resetForm.get('password');
  }
  get confirmPassword() {
    return this.resetForm.get('confirmPassword');
  }
}
