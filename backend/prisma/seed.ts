import { PrismaClient } from '../generated/prisma';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Crear usuarios de prueba
  const hashedPassword = await bcrypt.hash('password123', 10);

  // Usuario administrador
  const admin = await prisma.usuario.upsert({
    where: { email: 'admin@walmart.com' },
    update: {},
    create: {
      nombre: 'Administrador Walmart',
      email: 'admin@walmart.com',
      contrasena: hashedPassword,
      telefono: '+56912345678',
      tarjetas: 'Visa ****1234',
    },
  });

  // Usuario cliente
  const client = await prisma.usuario.upsert({
    where: { email: 'cliente@walmart.com' },
    update: {},
    create: {
      nombre: 'Cliente Ejemplo',
      email: 'cliente@walmart.com',
      contrasena: hashedPassword,
      telefono: '+56987654321',
      tarjetas: 'Mastercard ****5678',
    },
  });

  console.log('Usuarios creados:', { admin, client });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 