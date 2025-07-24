import { PrismaClient, Rol, PedidoEstado, ProductoEstado } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Crear usuarios de prueba
  const hashedPassword = await bcrypt.hash('password123', 10);

  // Usuario administrador
  await prisma.producto.deleteMany();
  await prisma.categoria.deleteMany();
  await prisma.oferta.deleteMany();
  await prisma.direccion.deleteMany();
  await prisma.usuario.deleteMany();
  await prisma.sucursal.deleteMany();

  // Crear categorías
  const categorias = await Promise.all(
    ['Tecnología', 'Hogar', 'Deportes'].map(nombre =>
      prisma.categoria.create({
        data: { nombre, estado: 'ACTIVA' }
      })
    )
  );

  // Crear ofertas
  const oferta = await prisma.oferta.create({
    data: {
      porcentaje: 10,
      descripcion: 'Oferta por lanzamiento',
      fechaInicio: new Date(),
      fechaFin: new Date(new Date().setMonth(new Date().getMonth() + 1)),
      estado: 'ACTIVA'
    }
  });

  // Crear sucursales
  const sucursales = await Promise.all([
    prisma.sucursal.create({
      data: {
        nombre: 'Sucursal Centro',
        direccion: 'Av. Central 100',
        ciudad: 'Santiago',
        region: 'Metropolitana'
      }
    }),
    prisma.sucursal.create({
      data: {
        nombre: 'Sucursal Norte',
        direccion: 'Calle Norte 200',
        ciudad: 'Arica',
        region: 'Arica y Parinacota'
      }
    })
  ]);

  // Crear usuarios y sus direcciones
  for (let i = 1; i <= 5; i++) {
    const usuario = await prisma.usuario.create({
      data: {
        nombre: `Usuario${i}`,
        email: `usuario${i}@mail.com`,
        contrasena: 'contrasena123',
        telefono: `91234567${i}`,
        tarjetas: `1111-2222-3333-${i.toString().padStart(4, '0')}`,
        rol: Rol.Cliente
      }
    });

    const direccion = await prisma.direccion.create({
      data: {
        comuna: 'Centro',
        region: 'Metropolitana',
        numero: 123 + i,
        calle: `Calle ${i}`,
        usuarioId: usuario.id
      }
    });

    // Crear pedido para el usuario
    const pedido = await prisma.pedido.create({
      data: {
        fechaPedido: new Date(),
        estado: PedidoEstado.PENDIENTE,
        total: 0, // Se actualizará después
        usuarioId: usuario.id,
        direccionId: direccion.id
      }
    });

    let totalPedido = 0;

    for (let j = 1; j <= 2; j++) {
      const categoria = categorias[j % categorias.length];

      const producto = await prisma.producto.create({
        data: {
          nombre: `Producto${i}-${j}`,
          descripcion: 'Producto de prueba',
          precio: 1000 + i * j,
          categoriaId: categoria.id,
          estado: ProductoEstado.ACTIVO,
          ofertaId: oferta.id,
          imagenUrl: 'https://via.placeholder.com/150'
        }
      });

      // Stock en sucursales
      for (const sucursal of sucursales) {
        await prisma.productoSucursal.create({
          data: {
            productoId: producto.id,
            sucursalId: sucursal.id,
            stock: Math.floor(Math.random() * 50) + 10
          }
        });
      }

      const cantidad = Math.floor(Math.random() * 3) + 1;
      const precio = producto.precio;
      const total = precio * cantidad;

      await prisma.lineaDePedido.create({
        data: {
          cantidad,
          precioUnitario: precio,
          productoId: producto.id,
          pedidoId: pedido.id
        }
      });

      totalPedido += total;

      await prisma.historialVisita.create({
        data: {
          usuarioId: usuario.id,
          productoId: producto.id
        }
      });
    }

    await prisma.pedido.update({
      where: { id: pedido.id },
      data: { total: totalPedido }
    });
  }

  console.log('✅ Seed masivo completado');
}

main()
  .catch(e => {
    console.error('❌ Error en seed:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
