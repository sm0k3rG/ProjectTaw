import { PrismaClient, Rol } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seed: creando datos iniciales...');

  /* =======================
   * USUARIOS
   * ======================= */

  const usuario1 = await prisma.usuario.create({
    data: {
      nombre: 'Juan Pérez',
      email: 'juan@correo.com',
      contrasena: 'contraseña123', // TODO: hash real
      telefono: '123456789',
      tarjetas: '1234-5678-9101-1121',
      rol: Rol.Admin,
    },
  });

  // Direcciones usuario1
  await prisma.direccion.createMany({
    data: [
      {
        comuna: 'Comuna1',
        region: 'Región1',
        numero: 123,
        calle: 'Calle Ficticia 1',
        usuarioId: usuario1.id,
      },
      {
        comuna: 'Comuna2',
        region: 'Región2',
        numero: 456,
        calle: 'Calle Ficticia 2',
        usuarioId: usuario1.id,
      },
    ],
  });

  const usuario2 = await prisma.usuario.create({
    data: {
      nombre: 'Ana Gómez',
      email: 'ana@correo.com',
      contrasena: 'contrasena456',
      telefono: '987654321',
      tarjetas: '4321-8765-1098-7765',
      rol: Rol.Cliente,
    },
  });

  // Necesitamos el ID de la dirección para pedidos → create (no createMany) y guardamos
  const direccionUsuario2 = await prisma.direccion.create({
    data: {
      comuna: 'Comuna3',
      region: 'Región3',
      numero: 789,
      calle: 'Calle Ficticia 3',
      usuarioId: usuario2.id,
    },
  });

  /* =======================
   * CATEGORÍA
   * ======================= */
  const categoria = await prisma.categoria.create({
    data: {
      nombre: 'Electrónica',
      estado: 'ACTIVO', // ajusta si tu schema usa otro formato
    },
  });

  /* =======================
   * PRODUCTO
   * ======================= */
  const producto = await prisma.producto.create({
    data: {
      nombre: 'Smartphone',
      descripcion: 'Smartphone de última generación',
      precio: 299.99,
      categoriaId: categoria.id,
      estado: 'ACTIVO',
      imagenUrl: 'https://link-imagen.com/smartphone.jpg',
    },
  });

  /* =======================
   * OFERTA (si tu relación es M:N con productos)
   * ======================= */
  const oferta = await prisma.oferta.create({
    data: {
      porcentaje: 20.0,
      descripcion: 'Descuento del 20% en productos electrónicos',
      fechaInicio: new Date(),
      fechaFin: new Date('2025-12-31'),
      estado: 'ACTIVO',
      productos: {
        connect: { id: producto.id },
      },
    },
  });

  /* =======================
   * SUCURSAL + STOCK
   * ======================= */
  const sucursal = await prisma.sucursal.create({
    data: {
      nombre: 'Sucursal 1',
      direccion: 'Av. Principal 123',
      ciudad: 'Ciudad1',
      region: 'Región1',
    },
  });

  await prisma.productoSucursal.create({
    data: {
      productoId: producto.id,
      sucursalId: sucursal.id,
      stock: 50,
    },
  });

  /* =======================
   * PEDIDOS (usuario2)
   * ======================= */
  const precioUnitario = producto.precio;

  // Pedido 1
  await prisma.pedido.create({
    data: {
      fechaPedido: new Date(),
      estado: 'PENDIENTE',
      total: precioUnitario, // 1 unidad
      usuarioId: usuario2.id,
      direccionId: direccionUsuario2.id,
      lineasDePedido: {
        create: [
          {
            cantidad: 1,
            precioUnitario,
            total: precioUnitario,
            productoId: producto.id,
          },
        ],
      },
    },
  });

  // Pedido 2 (1 + 2 unidades)
  await prisma.pedido.create({
    data: {
      fechaPedido: new Date(),
      estado: 'ACTIVO',
      total: precioUnitario * 3,
      usuarioId: usuario2.id,
      direccionId: direccionUsuario2.id,
      lineasDePedido: {
        create: [
          {
            cantidad: 1,
            precioUnitario,
            total: precioUnitario,
            productoId: producto.id,
          },
          {
            cantidad: 2,
            precioUnitario,
            total: precioUnitario * 2,
            productoId: producto.id,
          },
        ],
      },
    },
  });

  console.log('Seed completado con éxito (modo simple).');
}

/* =======================
 * RUN
 * ======================= */
main()
  .catch((e) => {
    console.error('Error en seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
