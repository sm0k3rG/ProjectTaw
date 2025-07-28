import { Injectable, Logger } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';

@Injectable()
export class AuditoriaService {
  private logger = new Logger('AuditoriaService');
  private logPath = path.join(process.cwd(), 'logs', 'product_audit.log');

  async logCambio(
    productoId: number,
    usuarioId: number | null,
    cambios: Record<string, any>,
  ) {
    const linea = JSON.stringify({
      fecha: new Date().toISOString(),
      productoId,
      usuarioId,
      cambios,
    }) + '\n';

    try {
      await fs.mkdir(path.dirname(this.logPath), { recursive: true });
      await fs.appendFile(this.logPath, linea, 'utf8');
    } catch (err) {
      this.logger.error('No se pudo escribir la auditoría', err as any);
    }
  }
}
