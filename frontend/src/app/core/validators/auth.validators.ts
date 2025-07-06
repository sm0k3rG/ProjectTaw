import { AbstractControl, ValidationErrors } from '@angular/forms';

export function validateEmail(control: AbstractControl): ValidationErrors | null {
  const email = control.value;

  if (!email) {
    return null; // La validación required se encarga de esto
  }

  // Validación básica de email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    return { invalidEmail: true };
  }

  // Validaciones adicionales
  if (email.length > 254) {
    return { emailTooLong: true };
  }

  if (email.split('@')[0].length > 64) {
    return { localPartTooLong: true };
  }

  return null;
}

export function validatePassword(control: AbstractControl): ValidationErrors | null {
  const password = control.value;

  if (!password) {
    return null; // La validación required se encarga de esto
  }

  const errors: ValidationErrors = {};

  // Mínimo 6 caracteres (más flexible)
  if (password.length < 6) {
    errors['minLength'] = { requiredLength: 6, actualLength: password.length };
  }

  // Al menos una letra (opcional, puedes quitarlo si quieres)
  if (!/(?=.*[A-Za-z])/.test(password)) {
    errors['noLetter'] = true;
  }

  // Al menos un número (opcional, puedes quitarlo si quieres)
  if (!/(?=.*\d)/.test(password)) {
    errors['noNumber'] = true;
  }

  return Object.keys(errors).length > 0 ? errors : null;
}
