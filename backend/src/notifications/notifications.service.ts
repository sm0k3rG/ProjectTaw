// src/notifications/notifications.service.ts

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import nodemailer from 'nodemailer';

@Injectable()
export class NotificationsService {
  private transporter;

  constructor(private readonly config: ConfigService) {
    // Crear un transportador usando tu proveedor de correo (por ejemplo, Gmail)
    this.transporter = nodemailer.createTransport({
      service: 'gmail', // O cualquier servicio de correo
      auth: {
        user: this.config.get<string>('MAIL_USER'),
        pass: this.config.get<string>('MAIL_PASS'),
      },
    });
  }

  // Método para enviar un correo electrónico
  async enviarCorreo(usuarioEmail: string, productoNombre: string): Promise<void> {
    const mailOptions = {
      from: 'brayan.garciiiia@gmail.com',  // El correo que envía
      to: usuarioEmail,  // El correo del usuario
      subject: `¡El producto ${productoNombre} ha sido repuesto!`,
      text: `Hola, el producto ${productoNombre} que visitaste anteriormente ha sido repuesto en stock. ¡No te lo pierdas!`,
    };

    // Enviar el correo
    try {
      await this.transporter.sendMail(mailOptions);
      console.log(`Correo enviado a ${usuarioEmail}`);
    } catch (error) {
      console.error('Error al enviar el correo:', error);
    }
  }
}
