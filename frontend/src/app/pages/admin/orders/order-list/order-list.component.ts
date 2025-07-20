import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';

interface Pedido {
  id: number;
  usuario: {
    id: number;
    nombre: string;
    email: string;
  };
  productos: Array<{
    nombre: string;
    cantidad: number;
    precio: number;
  }>;
  total: number;
  estado: 'Pendiente' | 'En camino' | 'Entregado' | 'Cancelado';
  fechaCreacion: Date;
  fechaEntrega?: Date;
}

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  // Datos originales
  pedidosOriginales: Pedido[] = [];

  // Datos filtrados y buscados
  pedidosFiltrados: Pedido[] = [];

  // Datos para paginación
  pedidosPaginados: Pedido[] = [];

  // Configuración de paginación
  paginaActual: number = 1;
  elementosPorPagina: number = 10;
  totalPaginas: number = 0;

  // Filtros
  filtroEstado: string = 'Todos';
  filtroOrden: string = 'Más recientes';
  terminoBusqueda: string = '';

  // Estados disponibles
  estadosDisponibles = ['Todos', 'Pendiente', 'En camino', 'Entregado', 'Cancelado'];

  // Opciones de orden
  opcionesOrden = ['Más recientes', 'Más antiguos'];

  // Pedido seleccionado para modal
  pedidoSeleccionado: Pedido | null = null;

  // Referencia a Math para usar en el template
  Math = Math;

  ngOnInit(): void {
    this.cargarPedidos();
  }

  cargarPedidos(): void {
    // Datos mockeados
    this.pedidosOriginales = [
      {
        id: 1,
        usuario: { id: 101, nombre: 'Juan Pérez', email: 'juan.perez@email.com' },
        productos: [
          { nombre: 'Laptop HP Pavilion', cantidad: 1, precio: 450000 },
          { nombre: 'Mouse inalámbrico', cantidad: 2, precio: 15000 }
        ],
        total: 480000,
        estado: 'Entregado',
        fechaCreacion: new Date('2024-01-15'),
        fechaEntrega: new Date('2024-01-18')
      },
      {
        id: 2,
        usuario: { id: 102, nombre: 'María González', email: 'maria.gonzalez@email.com' },
        productos: [
          { nombre: 'Smartphone Samsung Galaxy', cantidad: 1, precio: 320000 },
          { nombre: 'Cargador USB-C', cantidad: 1, precio: 8000 }
        ],
        total: 328000,
        estado: 'En camino',
        fechaCreacion: new Date('2024-01-20')
      },
      {
        id: 3,
        usuario: { id: 103, nombre: 'Carlos Rodríguez', email: 'carlos.rodriguez@email.com' },
        productos: [
          { nombre: 'Auriculares Bluetooth', cantidad: 1, precio: 25000 },
          { nombre: 'Cable HDMI', cantidad: 3, precio: 5000 }
        ],
        total: 40000,
        estado: 'Pendiente',
        fechaCreacion: new Date('2024-01-22')
      },
      {
        id: 4,
        usuario: { id: 104, nombre: 'Ana Silva', email: 'ana.silva@email.com' },
        productos: [
          { nombre: 'Tablet iPad', cantidad: 1, precio: 280000 },
          { nombre: 'Funda protectora', cantidad: 1, precio: 15000 }
        ],
        total: 295000,
        estado: 'Cancelado',
        fechaCreacion: new Date('2024-01-18')
      },
      {
        id: 5,
        usuario: { id: 105, nombre: 'Luis Morales', email: 'luis.morales@email.com' },
        productos: [
          { nombre: 'Monitor LG 24"', cantidad: 1, precio: 120000 },
          { nombre: 'Teclado mecánico', cantidad: 1, precio: 35000 }
        ],
        total: 155000,
        estado: 'Entregado',
        fechaCreacion: new Date('2024-01-10'),
        fechaEntrega: new Date('2024-01-12')
      },
      {
        id: 6,
        usuario: { id: 106, nombre: 'Patricia Vargas', email: 'patricia.vargas@email.com' },
        productos: [
          { nombre: 'Impresora HP', cantidad: 1, precio: 89000 },
          { nombre: 'Cartuchos de tinta', cantidad: 2, precio: 12000 }
        ],
        total: 113000,
        estado: 'En camino',
        fechaCreacion: new Date('2024-01-25')
      },
      {
        id: 7,
        usuario: { id: 107, nombre: 'Roberto Díaz', email: 'roberto.diaz@email.com' },
        productos: [
          { nombre: 'Cámara web HD', cantidad: 1, precio: 18000 },
          { nombre: 'Micrófono USB', cantidad: 1, precio: 22000 }
        ],
        total: 40000,
        estado: 'Pendiente',
        fechaCreacion: new Date('2024-01-26')
      },
      {
        id: 8,
        usuario: { id: 108, nombre: 'Carmen Ruiz', email: 'carmen.ruiz@email.com' },
        productos: [
          { nombre: 'Disco duro externo 1TB', cantidad: 1, precio: 45000 },
          { nombre: 'Memoria USB 32GB', cantidad: 2, precio: 8000 }
        ],
        total: 61000,
        estado: 'Entregado',
        fechaCreacion: new Date('2024-01-08'),
        fechaEntrega: new Date('2024-01-11')
      },
      {
        id: 9,
        usuario: { id: 109, nombre: 'Fernando López', email: 'fernando.lopez@email.com' },
        productos: [
          { nombre: 'Router WiFi 6', cantidad: 1, precio: 75000 },
          { nombre: 'Cable de red', cantidad: 5, precio: 3000 }
        ],
        total: 90000,
        estado: 'Cancelado',
        fechaCreacion: new Date('2024-01-19')
      },
      {
        id: 10,
        usuario: { id: 110, nombre: 'Isabel Torres', email: 'isabel.torres@email.com' },
        productos: [
          { nombre: 'Altavoces Bluetooth', cantidad: 1, precio: 28000 },
          { nombre: 'Soporte para monitor', cantidad: 1, precio: 15000 }
        ],
        total: 43000,
        estado: 'En camino',
        fechaCreacion: new Date('2024-01-24')
      },
      {
        id: 11,
        usuario: { id: 111, nombre: 'Miguel Ángel Castro', email: 'miguel.castro@email.com' },
        productos: [
          { nombre: 'Gaming Mouse', cantidad: 1, precio: 45000 },
          { nombre: 'Mousepad gaming', cantidad: 1, precio: 8000 }
        ],
        total: 53000,
        estado: 'Pendiente',
        fechaCreacion: new Date('2024-01-27')
      },
      {
        id: 12,
        usuario: { id: 112, nombre: 'Sofía Mendoza', email: 'sofia.mendoza@email.com' },
        productos: [
          { nombre: 'Laptop Dell Inspiron', cantidad: 1, precio: 380000 },
          { nombre: 'Mochila para laptop', cantidad: 1, precio: 12000 }
        ],
        total: 392000,
        estado: 'Entregado',
        fechaCreacion: new Date('2024-01-05'),
        fechaEntrega: new Date('2024-01-09')
      }
    ];

    this.aplicarFiltros();
  }

  aplicarFiltros(): void {
    // Aplicar filtro de estado
    let pedidosFiltrados = this.pedidosOriginales;

    if (this.filtroEstado !== 'Todos') {
      pedidosFiltrados = pedidosFiltrados.filter(pedido =>
        pedido.estado === this.filtroEstado
      );
    }

    // Aplicar búsqueda
    if (this.terminoBusqueda.trim()) {
      const termino = this.terminoBusqueda.toLowerCase().trim();
      pedidosFiltrados = pedidosFiltrados.filter(pedido =>
        pedido.usuario.nombre.toLowerCase().includes(termino) ||
        pedido.usuario.id.toString().includes(termino) ||
        pedido.usuario.email.toLowerCase().includes(termino)
      );
    }

    // Aplicar orden
    pedidosFiltrados.sort((a, b) => {
      if (this.filtroOrden === 'Más recientes') {
        return new Date(b.fechaCreacion).getTime() - new Date(a.fechaCreacion).getTime();
      } else {
        return new Date(a.fechaCreacion).getTime() - new Date(b.fechaCreacion).getTime();
      }
    });

    this.pedidosFiltrados = pedidosFiltrados;
    this.paginaActual = 1; // Resetear a la primera página
    this.calcularPaginacion();
  }

  onFiltroEstadoChange(): void {
    this.aplicarFiltros();
  }

  onFiltroOrdenChange(): void {
    this.aplicarFiltros();
  }

  onBusquedaChange(): void {
    this.aplicarFiltros();
  }

  limpiarFiltros(): void {
    this.filtroEstado = 'Todos';
    this.filtroOrden = 'Más recientes';
    this.terminoBusqueda = '';
    this.aplicarFiltros();
  }

  calcularPaginacion(): void {
    this.totalPaginas = Math.ceil(this.pedidosFiltrados.length / this.elementosPorPagina);
    const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
    const fin = inicio + this.elementosPorPagina;
    this.pedidosPaginados = this.pedidosFiltrados.slice(inicio, fin);
  }

  cambiarPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaActual = pagina;
      this.calcularPaginacion();
    }
  }

  obtenerRangoPaginas(): number[] {
    const totalPaginas = this.totalPaginas;
    const paginaActual = this.paginaActual;
    const rango = [];

    if (totalPaginas <= 5) {
      for (let i = 1; i <= totalPaginas; i++) {
        rango.push(i);
      }
    } else {
      if (paginaActual <= 3) {
        for (let i = 1; i <= 5; i++) {
          rango.push(i);
        }
      } else if (paginaActual >= totalPaginas - 2) {
        for (let i = totalPaginas - 4; i <= totalPaginas; i++) {
          rango.push(i);
        }
      } else {
        for (let i = paginaActual - 2; i <= paginaActual + 2; i++) {
          rango.push(i);
        }
      }
    }

    return rango;
  }

  verDetalles(pedido: Pedido): void {
    this.pedidoSeleccionado = pedido;
  }

  cerrarModal(): void {
    this.pedidoSeleccionado = null;
  }

  cancelarPedido(pedido: Pedido): void {
    if (pedido.estado !== 'En camino' && pedido.estado !== 'Pendiente') {
      Swal.fire({
        icon: 'error',
        title: 'No se puede cancelar',
        text: 'Solo se pueden cancelar pedidos en estado "En camino" o "Pendiente"',
        confirmButtonColor: '#0071ce'
      });
      return;
    }

    Swal.fire({
      title: '¿Cancelar pedido?',
      text: `¿Estás seguro de que quieres cancelar el pedido #${pedido.id}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0071ce',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sí, cancelar',
      cancelButtonText: 'No, mantener'
    }).then((result) => {
      if (result.isConfirmed) {
        // Simular cancelación
        pedido.estado = 'Cancelado';

        Swal.fire({
          title: 'Pedido cancelado',
          text: `El pedido #${pedido.id} ha sido cancelado exitosamente`,
          icon: 'success',
          timer: 3000,
          timerProgressBar: true,
          confirmButtonColor: '#0071ce'
        });

        // Reaplicar filtros para actualizar la vista
        this.aplicarFiltros();
      }
    });
  }

  formatearPrecio(precio: number): string {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(precio);
  }

  formatearFecha(fecha: Date): string {
    return new Intl.DateTimeFormat('es-CL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(fecha));
  }

  obtenerClaseEstado(estado: string): string {
    switch (estado) {
      case 'Pendiente': return 'badge bg-warning';
      case 'En camino': return 'badge bg-info';
      case 'Entregado': return 'badge bg-success';
      case 'Cancelado': return 'badge bg-danger';
      default: return 'badge bg-secondary';
    }
  }
}
