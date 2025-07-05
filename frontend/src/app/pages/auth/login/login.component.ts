import { CommonModule } from "@angular/common";
import { Component } from "@angular/core"
import { FormBuilder,  FormGroup, Validators } from "@angular/forms"
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: "app-login",
  standalone: true,
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class LoginComponent {
  loginForm: FormGroup
  isLoading = false
  showPassword = false

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true

      // Simular proceso de login
      setTimeout(() => {
        console.log("Login data:", this.loginForm.value)
        this.isLoading = false
        // Aquí iría la lógica de autenticación
      }, 2000)
    } else {
      this.markFormGroupTouched()
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
