/**
 * Componente modal encargado de simular el proceso de pago con tarjeta.
 * Permite ingresar los datos de la tarjeta, validarlos y simular el resultado del pago.
 * Si el pago es exitoso, muestra un comprobante; si falla, muestra un mensaje de error.
 * Obtiene la orden del usuario para mostrar el monto a pagar.
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../../../core/services/order.service';
import { Order } from '../../../core/models/order.interface';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [OrderService],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Input() pedidoId?: number;
  @Input() usuarioId?: number;
  @Output() closeModal = new EventEmitter<void>();
  @Output() paymentSuccess = new EventEmitter<any>();

  // Estados de la aplicación
  pasoActual: 'initial' | 'payment-form' | 'success' | 'error' = 'initial';

  // Datos del formulario
  datosTarjeta = {
    numeroTarjeta: '',
    cvv: '',
    nombreTitular: ''
  };

  // Validaciones
  errores = {
    numeroTarjeta: '',
    cvv: '',
    nombreTitular: ''
  };

  // Mensajes
  mensajeExito = '¡Pago procesado exitosamente!';
  mensajeError = 'Error en el servicio de pago. Por favor, intente nuevamente.';

  // Datos de la boleta
  pedido?: Order;
  totalPedido: number = 0;
  fechaPedido: Date = new Date();
  tieneTarjetaGuardada: boolean = true; // Simular que el usuario tiene tarjeta guardada
  ultimosDigitosTarjetaGuardada: string = ''; // Últimos 4 dígitos de la tarjeta guardada

  datosComprobante = {
    idTransaccion: '',
    monto: 0,
    fecha: new Date(),
    ultimosDigitosTarjeta: '',
    comercio: 'Walmart',
    descripcion: 'Compra de productos varios'
  };

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    if (this.pedidoId && this.usuarioId) {
      this.cargarPedido();
    }
  }

  ngOnChanges(): void {
    if (this.isOpen && this.pedidoId && this.usuarioId) {
      this.cargarPedido();
    }
  }

  cargarPedido(): void {
    if (!this.pedidoId || !this.usuarioId) {
      console.error('Faltan parámetros: pedidoId o usuarioId');
      return;
    }

    this.orderService.obtenerPedidoPropio(this.pedidoId, this.usuarioId).subscribe({
      next: (order: any) => {
        this.pedido = {
          id: order.id,
          estado: order.estado?.toLowerCase() || '',
          fecha: order.fechaPedido || order.fecha || '',
          direccion: order.direccion,
          direccionRetiro: order.direccionRetiro,
          lineasPedido: order.lineasDePedido || order.lineasPedido || [],
          total: order.total || 0
        };
        this.totalPedido = this.pedido.total;
        this.fechaPedido = new Date(this.pedido.fecha);

        // Obtener los datos de la tarjeta del usuario desde la respuesta del pedido
        this.obtenerDatosTarjetaUsuario(order.usuario);
      },
      error: (err) => {
        console.error('Error al obtener la orden en payment:', err);
      }
    });
  }

  /**
   * Cierra el modal
   */
  cerrarModal(): void {
    this.closeModal.emit();
    this.resetearEstado();
  }

  /**
   * Redirige a la vista de órdenes
   */
  irAVistaOrdenes(): void {
    this.router.navigate(['/pedidos', this.pedidoId, 'propio']);
  }

  /**
   * Resetea el estado del modal
   */
  resetearEstado(): void {
    this.pasoActual = 'initial';
    this.datosTarjeta = {
      numeroTarjeta: '',
      cvv: '',
      nombreTitular: ''
    };
    this.errores = {
      numeroTarjeta: '',
      cvv: '',
      nombreTitular: ''
    };
  }

  /**
   * Muestra el formulario de pago
   * Cambia el estado de la aplicación a 'payment-form'
   */
  mostrarFormularioPago() {
    this.pasoActual = 'payment-form';
  }

  /**
   * Valida el número de tarjeta
   * @param value - Número de tarjeta sin formatear
   * @returns true si es válido, false en caso contrario
   */
  validarNumeroTarjeta(value: string): boolean {
    // Limpiar espacios y guiones
    const cleanValue = value.replace(/\s/g, '').replace(/-/g, '');

    if (cleanValue.length !== 16) {
      this.errores.numeroTarjeta = 'El número de tarjeta debe tener 16 dígitos';
      return false;
    }

    this.errores.numeroTarjeta = '';
    return true;
  }

  /**
   * Valida el CVV
   * @param value - CVV a validar
   * @returns true si es válido, false en caso contrario
   */
  validarCvv(value: string): boolean {
    if (value.length !== 3) {
      this.errores.cvv = 'El CVV debe tener 3 dígitos';
      return false;
    }

    this.errores.cvv = '';
    return true;
  }

  /**
   * Valida el nombre del titular
   * @param value - Nombre a validar
   * @returns true si es válido, false en caso contrario
   */
  validarNombreTitular(value: string): boolean {
    if (value.trim().length < 3) {
      this.errores.nombreTitular = 'El nombre debe tener al menos 3 caracteres';
      return false;
    }

    this.errores.nombreTitular = '';
    return true;
  }

  /**
   * Formatea el número de tarjeta en grupos de 4 dígitos
   * Solo permite números y formatea automáticamente
   * @param event - Evento del input
   */
  formatearNumeroTarjeta(event: any) {
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
    this.datosTarjeta.numeroTarjeta = formatted;

    // Validar
    this.validarNumeroTarjeta(value);
  }

  /**
   * Formatea el CVV (solo números)
   * @param event - Evento del input
   */
  formatearCvv(event: any) {
    let value = event.target.value;

    // Solo permitir números
    value = value.replace(/\D/g, '');

    // Limitar a 3 dígitos
    if (value.length > 3) {
      value = value.substring(0, 3);
    }

    // Actualizar el valor en el input
    event.target.value = value;
    this.datosTarjeta.cvv = value;

    // Validar
    this.validarCvv(value);
  }

  /**
   * Formatea el nombre del titular (solo letras)
   * @param event - Evento del input
   */
  formatearNombreTitular(event: any) {
    let value = event.target.value;

    // Solo permitir letras, espacios y caracteres especiales del español
    value = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');

    // Actualizar el valor en el input
    event.target.value = value;
    this.datosTarjeta.nombreTitular = value;

    // Validar
    this.validarNombreTitular(value);
  }

  /**
   * Obtiene los datos de la tarjeta del usuario desde la respuesta del pedido
   * @param usuario - Datos del usuario que vienen en la respuesta del pedido
   */
  obtenerDatosTarjetaUsuario(usuario: any) {

    if (usuario && usuario.tarjetas) {
      // El campo tarjetas es un string, asumimos que contiene la información de la tarjeta
      // Puede ser un JSON string o un string simple con el número de tarjeta
      try {
        // Intentar parsear como JSON primero
        const tarjetasData = JSON.parse(usuario.tarjetas);
        // JSON.parse() convierte ese string en un objeto JavaScript
        if (Array.isArray(tarjetasData) && tarjetasData.length > 0) {
          // Si es un array de tarjetas, tomar la primera
          const primeraTarjeta = tarjetasData[0];
          this.ultimosDigitosTarjetaGuardada = this.extraerUltimosDigitos(primeraTarjeta.numero || primeraTarjeta);
          this.tieneTarjetaGuardada = true;
        } else if (tarjetasData.numero) {
          // Si es un objeto con número
          this.ultimosDigitosTarjetaGuardada = this.extraerUltimosDigitos(tarjetasData.numero);
          this.tieneTarjetaGuardada = true;
        }
      } catch (e) {
        // Si no es JSON, tratar como string simple
        this.ultimosDigitosTarjetaGuardada = this.extraerUltimosDigitos(usuario.tarjetas);
        this.tieneTarjetaGuardada = true;
      }

    } else {
      this.tieneTarjetaGuardada = false;
    }
  }

  /**
   * Extrae los últimos 4 dígitos de un número de tarjeta
   * @param numeroTarjeta - Número de tarjeta (puede tener formato)
   * @returns Los últimos 4 dígitos
   */
  extraerUltimosDigitos(numeroTarjeta: string): string {
    if (!numeroTarjeta) return '';

    // Limpiar el número de tarjeta (quitar espacios, guiones, etc.)
    const numeroLimpio = numeroTarjeta.replace(/\D/g, '');

    // Extraer los últimos 4 dígitos
    return numeroLimpio.slice(-4);
  }

  /**
   * Genera datos ficticios para la boleta
   * Se ejecuta cuando el pago es exitoso
   */
  generarDatosComprobante() {
    const now = new Date();
    this.datosComprobante = {
      idTransaccion: 'TXN' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      monto: this.totalPedido, // monto real del pedido
      fecha: this.fechaPedido,   // fecha real del pedido
      ultimosDigitosTarjeta: this.datosTarjeta.numeroTarjeta.replace(/\s/g, '').slice(-4), // Para nueva tarjeta
      comercio: 'Walmart',
      descripcion: 'Compra de productos varios'
    };
  }

  /**
   * Procesa el pago y simula el resultado
   * Valida todos los campos antes de procesar
   */
  procesarPago() {
    // Validar todos los campos
    const isCardNumberValid = this.validarNumeroTarjeta(this.datosTarjeta.numeroTarjeta.replace(/\s/g, ''));
    const isCvvValid = this.validarCvv(this.datosTarjeta.cvv);
    const isCardholderNameValid = this.validarNombreTitular(this.datosTarjeta.nombreTitular);

    if (!isCardNumberValid || !isCvvValid || !isCardholderNameValid) {
      return;
    }

    // Simular procesamiento de pago (90% éxito, 10% error)
    const random = Math.random();

    if (random > 0.1) { // 80% de probabilidad de éxito
      this.generarDatosComprobante();
      this.pasoActual = 'success';
      this.paymentSuccess.emit(this.datosComprobante);
      // Redirigir a la vista de órdenes después de un breve delay
      setTimeout(() => {
        this.router.navigate(['/pedidos', this.pedidoId, 'propio']);
      }, 2000); // 2 segundos de delay para mostrar el comprobante
    } else {
      this.pasoActual = 'error';
    }
  }

  /**
   * Procesa el pago con tarjeta guardada
   * Simula un pago directo sin necesidad de ingresar datos
   */
  pagarConTarjetaGuardada() {

    // Simular procesamiento de pago con tarjeta guardada (95% éxito)
    const random = Math.random();

    if (random > 0.05) { // 95% de probabilidad de éxito
      this.generarDatosComprobante();
      // Usar los últimos 4 dígitos de la tarjeta guardada del usuario
      this.datosComprobante.ultimosDigitosTarjeta = this.ultimosDigitosTarjetaGuardada;
      this.pasoActual = 'success';
      this.paymentSuccess.emit(this.datosComprobante);
      // Redirigir a la vista de órdenes después de un breve delay
      setTimeout(() => {
        this.router.navigate(['/pedidos', this.pedidoId, 'propio']);
      }, 2000); // 2 segundos de delay para mostrar el comprobante
    } else {
      this.pasoActual = 'error';
    }
  }

  /**
   * Vuelve al estado inicial
   * Limpia todos los datos del formulario
   */
  volverInicial() {
    this.pasoActual = 'initial';
    this.datosTarjeta = {
      numeroTarjeta: '',
      cvv: '',
      nombreTitular: ''
    };
    this.errores = {
      numeroTarjeta: '',
      cvv: '',
      nombreTitular: ''
    };
  }

  /**
   * Previene la entrada de caracteres no numéricos en el campo de tarjeta
   * @param event - Evento keypress
   */
  prevenirNoNumericoTarjeta(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  }

  /**
   * Previene la entrada de caracteres no numéricos en el campo CVV
   * @param event - Evento keypress
   */
  prevenirNoNumericoCvv(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  }

  /**
   * Previene la entrada de caracteres no alfabéticos en el campo nombre
   * @param event - Evento keypress
   */
  prevenirNoAlfabetico(event: any) {
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