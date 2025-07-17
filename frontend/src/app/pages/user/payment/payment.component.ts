import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  // Estados de la aplicación
  currentStep: 'initial' | 'payment-form' | 'success' | 'error' = 'initial';
  
  // Datos del formulario
  cardData = {
    cardNumber: '',
    cvv: '',
    cardholderName: ''
  };
  
  // Validaciones
  errors = {
    cardNumber: '',
    cvv: '',
    cardholderName: ''
  };
  
  // Mensajes
  successMessage = '¡Pago procesado exitosamente!';
  errorMessage = 'Error en el servicio de pago. Por favor, intente nuevamente.';
  
  // Datos de la boleta
  receiptData = {
    transactionId: '',
    amount: 0,
    date: new Date(),
    cardLastDigits: '',
    merchant: 'Walmart',
    description: 'Compra de productos varios'
  };
  
  /**
   * Muestra el formulario de pago
   * Cambia el estado de la aplicación a 'payment-form'
   */
  showPaymentForm() {
    this.currentStep = 'payment-form';
  }
  
  /**
   * Valida el número de tarjeta
   * @param value - Número de tarjeta sin formatear
   * @returns true si es válido, false en caso contrario
   */
  validateCardNumber(value: string): boolean {
    // Limpiar espacios y guiones
    const cleanValue = value.replace(/\s/g, '').replace(/-/g, '');
    
    if (cleanValue.length !== 16) {
      this.errors.cardNumber = 'El número de tarjeta debe tener 16 dígitos';
      return false;
    }
    
    this.errors.cardNumber = '';
    return true;
  }
  
  /**
   * Valida el CVV
   * @param value - CVV a validar
   * @returns true si es válido, false en caso contrario
   */
  validateCvv(value: string): boolean {
    if (value.length !== 3) {
      this.errors.cvv = 'El CVV debe tener 3 dígitos';
      return false;
    }
    
    
    this.errors.cvv = '';
    return true;
  }
  
  /**
   * Valida el nombre del titular
   * @param value - Nombre a validar
   * @returns true si es válido, false en caso contrario
   */
  validateCardholderName(value: string): boolean {
    if (value.trim().length < 3) {
      this.errors.cardholderName = 'El nombre debe tener al menos 3 caracteres';
      return false;
    }

    this.errors.cardholderName = '';
    return true;
  }
  
  /**
   * Formatea el número de tarjeta en grupos de 4 dígitos
   * Solo permite números y formatea automáticamente
   * @param event - Evento del input
   */
  formatCardNumber(event: any) {
    let value = event.target.value;
    
    // Solo permitir números
    value = value.replace(/\D/g, '');
    
    // Limitar a 16 dígitos
    if (value.length > 16) {
      value = value.substring(0, 16);
    }
    
    // Formatear en grupos de 4
    const formatted = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    
    // Actualizar el valor en el input
    event.target.value = formatted;
    this.cardData.cardNumber = formatted;
    
    // Validar
    this.validateCardNumber(value);
  }
  
  /**
   * Formatea el CVV (solo números)
   * @param event - Evento del input
   */
  formatCvv(event: any) {
    let value = event.target.value;
    
    // Solo permitir números
    value = value.replace(/\D/g, '');
    
    // Limitar a 3 dígitos
    if (value.length > 3) {
      value = value.substring(0, 3);
    }
    
    // Actualizar el valor en el input
    event.target.value = value;
    this.cardData.cvv = value;
    
    // Validar
    this.validateCvv(value);
  }
  
  /**
   * Formatea el nombre del titular (solo letras)
   * @param event - Evento del input
   */
  formatCardholderName(event: any) {
    let value = event.target.value;
    
    // Solo permitir letras, espacios y caracteres especiales del español
    value = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    
    // Actualizar el valor en el input
    event.target.value = value;
    this.cardData.cardholderName = value;
    
    // Validar
    this.validateCardholderName(value);
  }
  
  /**
   * Genera datos ficticios para la boleta
   * Se ejecuta cuando el pago es exitoso
   */
  generateReceiptData() {
    const now = new Date();
    this.receiptData = {
      transactionId: 'TXN' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      amount: Math.floor(Math.random() * 1000) + 100, // Entre 100 y 1100
      date: now,
      cardLastDigits: this.cardData.cardNumber.replace(/\s/g, '').slice(-4),
      merchant: 'Walmart',
      description: 'Compra de productos varios'
    };
  }
  
  /**
   * Procesa el pago y simula el resultado
   * Valida todos los campos antes de procesar
   */
  processPayment() {
    // Validar todos los campos
    const isCardNumberValid = this.validateCardNumber(this.cardData.cardNumber.replace(/\s/g, ''));
    const isCvvValid = this.validateCvv(this.cardData.cvv);
    const isCardholderNameValid = this.validateCardholderName(this.cardData.cardholderName);
    
    if (!isCardNumberValid || !isCvvValid || !isCardholderNameValid) {
      return;
    }
    
    // Simular procesamiento de pago (90% éxito, 10% error)
    const random = Math.random();
    
    if (random > 0.1) { // 80% de probabilidad de éxito
      this.generateReceiptData();
      this.currentStep = 'success';
    } else {
      this.currentStep = 'error';
    }
  }
  
  /**
   * Vuelve al estado inicial
   * Limpia todos los datos del formulario
   */
  goToInitial() {
    this.currentStep = 'initial';
    this.cardData = {
      cardNumber: '',
      cvv: '',
      cardholderName: ''
    };
    this.errors = {
      cardNumber: '',
      cvv: '',
      cardholderName: ''
    };
  }
  
  /**
   * Previene la entrada de caracteres no numéricos en el campo de tarjeta
   * @param event - Evento keypress
   */
  preventNonNumericCard(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  }
  
  /**
   * Previene la entrada de caracteres no numéricos en el campo CVV
   * @param event - Evento keypress
   */
  preventNonNumericCvv(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  }
  
  /**
   * Previene la entrada de caracteres no alfabéticos en el campo nombre
   * @param event - Evento keypress
   */
  preventNonAlphabetic(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    // Permitir: letras (65-90, 97-122), espacios (32), ñ (241), Ñ (209), acentos
    if (charCode > 31 && 
        !(charCode === 32 || // espacio
          (charCode >= 65 && charCode <= 90) || // A-Z
          (charCode >= 97 && charCode <= 122) || // a-z
          charCode === 241 || // ñ
          charCode === 209 || // Ñ
          charCode === 225 || // á
          charCode === 233 || // é
          charCode === 237 || // í
          charCode === 243 || // ó
          charCode === 250 || // ú
          charCode === 193 || // Á
          charCode === 201 || // É
          charCode === 205 || // Í
          charCode === 211 || // Ó
          charCode === 218)) { // Ú
      event.preventDefault();
    }
  }
}
