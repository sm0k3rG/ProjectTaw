import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: +process.env.SMTP_PORT!,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  async enviarCorreoRecuperacion(destinatario: string, token: string) {
    const url = `${process.env.FRONTEND_RESET_URL}?token=${token}`;
    const html = `
      <p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p>
      <a href="${url}">${url}</a>
      <p>Este enlace expira en 30 minutos.</p>
    `;

    await this.transporter.sendMail({
      from: `"Soporte" <${process.env.SMTP_USER}>`,
      to: destinatario,
      subject: 'Recuperación de contraseña',
      html,
    });
  }
}
