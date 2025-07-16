import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Order {
  id: number;
  fecha: string;
  total: number;
  estado: string;
  productos: { nombre: string; cantidad: number; precio: number; }[];
}

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {
  orders: Order[] = [
    // ... (mock de órdenes, se puede duplicar para simular más de 10)
    {
      id: 1,
      fecha: '2024-07-07',
      total: 25990,
      estado: 'Entregado',
      productos: [
        { nombre: 'Leche', cantidad: 2, precio: 1200 },
        { nombre: 'Pan', cantidad: 1, precio: 1500 },
        { nombre: 'Queso', cantidad: 1, precio: 2200 }
      ]
    },
    {
      id: 2,
      fecha: '2024-07-05',
      total: 18990,
      estado: 'En camino',
      productos: [
        { nombre: 'Arroz', cantidad: 3, precio: 1000 },
        { nombre: 'Aceite', cantidad: 1, precio: 3500 }
      ]
    },
    {
      id: 3,
      fecha: '2024-07-01',
      total: 9990,
      estado: 'Cancelado',
      productos: [
        { nombre: 'Fideos', cantidad: 4, precio: 800 },
        { nombre: 'Salsa', cantidad: 2, precio: 1200 }
      ]
    },
    // Duplicar para simular más de 10 órdenes
    { id: 4, fecha: '2024-06-28', total: 15990, estado: 'Entregado', productos: [ { nombre: 'Cereal', cantidad: 2, precio: 2500 } ] },
    { id: 5, fecha: '2024-06-25', total: 20990, estado: 'En camino', productos: [ { nombre: 'Jugo', cantidad: 5, precio: 900 } ] },
    { id: 6, fecha: '2024-06-20', total: 11990, estado: 'Entregado', productos: [ { nombre: 'Galletas', cantidad: 3, precio: 1200 } ] },
    { id: 7, fecha: '2024-06-18', total: 8990, estado: 'Cancelado', productos: [ { nombre: 'Azúcar', cantidad: 2, precio: 1100 } ] },
    { id: 8, fecha: '2024-06-15', total: 17990, estado: 'Entregado', productos: [ { nombre: 'Sal', cantidad: 1, precio: 800 } ] },
    { id: 9, fecha: '2024-06-10', total: 13990, estado: 'En camino', productos: [ { nombre: 'Café', cantidad: 2, precio: 3500 } ] },
    { id: 10, fecha: '2024-06-05', total: 15990, estado: 'Entregado', productos: [ { nombre: 'Té', cantidad: 4, precio: 1000 } ] },
    { id: 11, fecha: '2024-06-01', total: 10990, estado: 'Entregado', productos: [ { nombre: 'Mermelada', cantidad: 2, precio: 1800 } ] },
    { id: 12, fecha: '2024-05-28', total: 20990, estado: 'En camino', productos: [ { nombre: 'Mantequilla', cantidad: 1, precio: 2500 } ] },
  ];

  selectedOrder: Order | null = null;

  // Paginación
  page: number = 1;
  pageSize: number = 10;

  get totalPages(): number {
    return Math.ceil(this.orders.length / this.pageSize);
  }

  get paginatedOrders(): Order[] {
    const start = (this.page - 1) * this.pageSize;
    return this.orders.slice(start, start + this.pageSize);
  }

  goToPage(p: number) {
    if (p >= 1 && p <= this.totalPages) {
      this.page = p;
    }
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
    }
  }

  selectOrder(order: Order) {
    this.selectedOrder = order;
  }

  closeDetail() {
    this.selectedOrder = null;
  }

  formatCLP(value: number): string {
    return value.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 });
  }
}
