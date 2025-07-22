import { google } from 'googleapis';
import * as nodemailer from 'nodemailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NotificationsService {
  private readonly CLIENT_ID: string;
  private readonly CLIENT_SECRET: string;
  private readonly REDIRECT_URI: string;
  private readonly REFRESH_TOKEN: string;
  private readonly USER_EMAIL: string;
  private readonly oAuth2Client;

  constructor(private readonly config: ConfigService) {
    this.CLIENT_ID = this.config.get<string>('GMAIL_CLIENT_ID')!;
    this.CLIENT_SECRET = this.config.get<string>('GMAIL_CLIENT_SECRET')!;
    this.REDIRECT_URI = 'https://developers.google.com/oauthplayground';
    this.REFRESH_TOKEN = this.config.get<string>('GMAIL_REFRESH_TOKEN')!;
    this.USER_EMAIL = this.config.get<string>('MAIL_USER')!;

    this.oAuth2Client = new google.auth.OAuth2(
      this.CLIENT_ID,
      this.CLIENT_SECRET,
      this.REDIRECT_URI,
    );

    this.oAuth2Client.setCredentials({
      refresh_token: this.REFRESH_TOKEN,
    });
  }

  async notificarCreacionPedido(
    usuarioEmail: string,
    pedidoId: number,
    total: number,
  ): Promise<void> {
    try {
      const { token } = await this.oAuth2Client.getAccessToken();

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: this.USER_EMAIL,
          clientId: this.CLIENT_ID,
          clientSecret: this.CLIENT_SECRET,
          refreshToken: this.REFRESH_TOKEN,
          accessToken: token!,
        },
      });

      const mailOptions = {
        from: this.USER_EMAIL,
        to: usuarioEmail,
        subject: `Tu pedido #${pedidoId} fue creado con éxito`,
        html: `
          <h1>¡Gracias por tu compra!</h1>
          <p>Tu pedido <strong>#${pedidoId}</strong> ha sido creado correctamente.</p>
          <p>Total del pedido: <strong>$${total.toFixed(2)}</strong></p>
          <p>Recibirás más información cuando el pedido cambie de estado.</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log(`📧 Correo enviado a ${usuarioEmail}`);
    } catch (error) {
      console.error('❌ Error al enviar correo:', error);
    }
  }
}
