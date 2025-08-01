// src/notifications/notifications.gateway.ts

import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class NotificationsGateway {
  @WebSocketServer() server: Server;

  // Emitir una notificación a todos los clientes conectados
  emitirNotificacion(sucursalId: number, productoNombre: string) {
    this.server.emit('stock-repuesto', {
      mensaje: `El producto ${productoNombre} ha sido repuesto en stock en la sucursal ${sucursalId}`,
    });
  }
}
