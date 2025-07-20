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
  formularioReset: FormGroup;
  cargando = false;
  token: string | null = null;

  constructor(
    private fb: FormBuilder,
    private ruta: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
    this.formularioReset = this.fb.group({
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContrasena: ['', Validators.required]
    }, { validators: this.validadorCoincidenciaContrasena });

    this.ruta.queryParams.subscribe(params => {
      this.token = params['token'] || null;
    });
  }

  validadorCoincidenciaContrasena(grupo: FormGroup) {
    const pass = grupo.get('contrasena')?.value;
    const confirm = grupo.get('confirmarContrasena')?.value;
    return pass === confirm ? null : { passwordMismatch: true };
  }

  enviarReset() {
    if (this.formularioReset.invalid || !this.token) {
      this.formularioReset.markAllAsTouched();
      Swal.fire({ icon: 'error', title: 'Error', text: 'Completa todos los campos correctamente.' });
      return;
    }
    this.cargando = true;
    const nuevaContrasena = this.formularioReset.value.contrasena;
    // Simulación: reemplaza por llamada real al backend si es necesario
    this.authService.restablecerContraseña(this.token, nuevaContrasena).subscribe({
      next: () => {
        this.cargando = false;
        Swal.fire({ icon: 'success', title: '¡Contraseña restablecida!', text: 'Ahora puedes iniciar sesión.', timer: 1500, showConfirmButton: false });
        this.router.navigate(['/']);
      },
      error: () => {
        this.cargando = false;
        Swal.fire({ icon: 'error', title: 'Error', text: 'No se pudo restablecer la contraseña.' });
      }
    });
  }

  get contrasena() {
    return this.formularioReset.get('contrasena');
  }
  get confirmarContrasena() {
    return this.formularioReset.get('confirmarContrasena');
  }
}
