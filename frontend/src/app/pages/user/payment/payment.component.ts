/**
 * Componente encargado de simular el proceso de pago con tarjeta.
 * Permite ingresar los datos de la tarjeta, validarlos y simular el resultado del pago.
 * Si el pago es exitoso, muestra un comprobante; si falla, muestra un mensaje de error.
 * Obtiene la orden del usuario para mostrar el monto a pagar.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../../core/services/order.service';
import { Order } from '../../../core/models/order.interface';
import { ActivatedRoute } from '@angular/router';
import { MainNavbarComponent } from '../../../shared/main-navbar/main-navbar.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule, MainNavbarComponent],
  providers: [OrderService],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
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

  constructor(private orderService: OrderService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const pedidoId = Number(params.get('pedidoId'));
      const usuarioId = Number(params.get('usuarioId'));

      console.log('pedidoId:', pedidoId);
      console.log('usuarioId:', usuarioId);

      if (!pedidoId || !usuarioId) {
        console.error('Faltan parámetros: pedidoId o usuarioId');
        return;
      }

      this.orderService.obtenerPedidoPropio(pedidoId, usuarioId).subscribe({
        next: (order: any) => {
          console.log('Order recibido en payment:', order);
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
          console.log('Total del pedido:', this.totalPedido);

          // Obtener los datos de la tarjeta del usuario desde la respuesta del pedido
          this.obtenerDatosTarjetaUsuario(order.usuario);
        },
        error: (err) => {
          console.error('Error al obtener la orden en payment:', err);
        }
      });
    });
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
    console.log('Datos del usuario recibidos:', usuario);

    if (usuario && usuario.tarjetas) {
      // El campo tarjetas es un string, asumimos que contiene la información de la tarjeta
      // Puede ser un JSON string o un string simple con el número de tarjeta
      try {
        // Intentar parsear como JSON primero
        const tarjetasData = JSON.parse(usuario.tarjetas);
        if (Array.isArray(tarjetasData) && tarjetasData.length > 0) {
          // Si es un array de tarjetas, tomar la primera
          const primeraTarjeta = tarjetasData[0];
          this.ultimosDigitosTarjetaGuardada = this.extraerUltimosDigitos(primeraTarjeta.numero || primeraTarjeta);
          this.tieneTarjetaGuardada = true;
          console.log('Tarjeta guardada encontrada (JSON):', primeraTarjeta);
        } else if (tarjetasData.numero) {
          // Si es un objeto con número
          this.ultimosDigitosTarjetaGuardada = this.extraerUltimosDigitos(tarjetasData.numero);
          this.tieneTarjetaGuardada = true;
          console.log('Tarjeta guardada encontrada (objeto):', tarjetasData);
        }
      } catch (e) {
        // Si no es JSON, tratar como string simple
        this.ultimosDigitosTarjetaGuardada = this.extraerUltimosDigitos(usuario.tarjetas);
        this.tieneTarjetaGuardada = true;
        console.log('Tarjeta guardada encontrada (string):', usuario.tarjetas);
      }

      console.log('Últimos 4 dígitos extraídos:', this.ultimosDigitosTarjetaGuardada);
    } else {
      this.tieneTarjetaGuardada = false;
      console.log('No se encontró tarjeta guardada para el usuario');
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
    } else {
      this.pasoActual = 'error';
    }
  }

  /**
   * Procesa el pago con tarjeta guardada
   * Simula un pago directo sin necesidad de ingresar datos
   */
  pagarConTarjetaGuardada() {
    console.log('Procesando pago con tarjeta guardada...');

    // Simular procesamiento de pago con tarjeta guardada (95% éxito)
    const random = Math.random();

    if (random > 0.05) { // 95% de probabilidad de éxito
      this.generarDatosComprobante();
      // Usar los últimos 4 dígitos de la tarjeta guardada del usuario
      this.datosComprobante.ultimosDigitosTarjeta = this.ultimosDigitosTarjetaGuardada;
      this.pasoActual = 'success';
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
