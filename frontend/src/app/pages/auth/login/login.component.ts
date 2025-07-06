import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../../core/services/auth.service';
import { validateEmail, validatePassword } from '../../../core/validators/auth.validators';
import { RouterLink } from '@angular/router';


@Component({
  selector: "app-login",
  standalone: true,
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
  ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  isLoading = false;
  showPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, validateEmail]],
      password: ["", [Validators.required, validatePassword]],
    });
  }

    onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe({
        next: (response) => {
          this.isLoading = false;

          // Decodificar token para obtener el rol
          const decodedToken = this.authService.getCurrentUser();

          if (decodedToken) {
            // Redirigir según el rol
            const routesByRole: { [key: string]: string } = {
              'Administrator': '/admin/dashboard',
              'Client': '/client/dashboard'
            };

            const route = routesByRole[decodedToken.role] || '/dashboard';

            // Mostrar mensaje de bienvenida
            Swal.fire({
              icon: 'success',
              title: `¡Bienvenido ${decodedToken.name}!`,
              text: `Has iniciado sesión como ${decodedToken.role === 'Administrator' ? 'Administrador' : 'Cliente'}`,
              confirmButtonText: 'Continuar',
              confirmButtonColor: '#0071ce'
            }).then(() => {
              this.router.navigate([route]);
            });
          }
        },
        error: (error) => {
          this.isLoading = false;

          let errorMessage = 'Error al iniciar sesión';
          if (error.status === 401) {
            errorMessage = 'Credenciales incorrectas';
          } else if (error.status === 404) {
            errorMessage = 'Usuario no encontrado';
          }

          Swal.fire({
            icon: 'error',
            title: 'Error de autenticación',
            text: errorMessage,
            confirmButtonText: 'Entendido',
            confirmButtonColor: '#dc3545'
          });
        }
      });
    } else {
      this.markFormGroupTouched();

      Swal.fire({
        icon: 'error',
        title: 'Error de validación',
        text: 'Por favor, completa todos los campos correctamente',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#dc3545'
      });
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword
  }

  private markFormGroupTouched() {
    Object.keys(this.loginForm.controls).forEach((key) => {
      const control = this.loginForm.get(key)
      control?.markAsTouched()
    })
  }

  get email() {
    return this.loginForm.get("email")
  }
  get password() {
    return this.loginForm.get("password")
  }
}
