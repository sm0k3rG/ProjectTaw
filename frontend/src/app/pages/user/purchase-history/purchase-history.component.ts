import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';

interface Compra {
  id: number;
  fecha: string;
  total: number;
  estado: string;
  productos: { nombre: string; cantidad: number; precio: number; }[];
}

@Component({
  selector: 'app-purchase-history',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './purchase-history.component.html',
  styleUrl: './purchase-history.component.css'
})
export class PurchaseHistoryComponent {
  historial: Compra[] = [
    { id: 1, fecha: '2024-07-07', total: 25990, estado: 'Entregado', productos: [ { nombre: 'Leche', cantidad: 2, precio: 1200 }, { nombre: 'Pan', cantidad: 1, precio: 1500 } ] },
    { id: 2, fecha: '2024-07-01', total: 18990, estado: 'Entregado', productos: [ { nombre: 'Arroz', cantidad: 3, precio: 1000 }, { nombre: 'Aceite', cantidad: 1, precio: 3500 } ] },
    { id: 3, fecha: '2024-06-25', total: 9990, estado: 'Entregado', productos: [ { nombre: 'Fideos', cantidad: 4, precio: 800 }, { nombre: 'Salsa', cantidad: 2, precio: 1200 } ] },
    { id: 4, fecha: '2024-06-20', total: 15990, estado: 'Entregado', productos: [ { nombre: 'Cereal', cantidad: 2, precio: 2500 } ] },
    { id: 5, fecha: '2024-06-15', total: 20990, estado: 'Entregado', productos: [ { nombre: 'Jugo', cantidad: 5, precio: 900 } ] },
    { id: 6, fecha: '2024-06-10', total: 11990, estado: 'Entregado', productos: [ { nombre: 'Galletas', cantidad: 3, precio: 1200 } ] },
    { id: 7, fecha: '2024-06-05', total: 8990, estado: 'Entregado', productos: [ { nombre: 'Azúcar', cantidad: 2, precio: 1100 } ] },
    { id: 8, fecha: '2024-06-01', total: 17990, estado: 'Entregado', productos: [ { nombre: 'Sal', cantidad: 1, precio: 800 } ] },
    { id: 9, fecha: '2024-05-28', total: 13990, estado: 'Entregado', productos: [ { nombre: 'Café', cantidad: 2, precio: 3500 } ] },
    { id: 10, fecha: '2024-05-20', total: 15990, estado: 'Entregado', productos: [ { nombre: 'Té', cantidad: 4, precio: 1000 } ] },
    { id: 11, fecha: '2024-05-10', total: 10990, estado: 'Entregado', productos: [ { nombre: 'Mermelada', cantidad: 2, precio: 1800 } ] },
    { id: 12, fecha: '2024-05-01', total: 20990, estado: 'Entregado', productos: [ { nombre: 'Mantequilla', cantidad: 1, precio: 2500 } ] },
  ];

  pagina: number = 1;
  cantidadPorPagina: number = 10;
  compraSeleccionada: Compra | null = null;

  get totalPaginas(): number {
    return Math.ceil(this.historial.length / this.cantidadPorPagina);
  }

  get comprasPaginadas(): Compra[] {
    const inicio = (this.pagina - 1) * this.cantidadPorPagina;
    return this.historial.slice(inicio, inicio + this.cantidadPorPagina);
  }

  get paginasVisibles(): number[] {
    const total = this.totalPaginas;
    const actual = this.pagina;
    let inicio = Math.max(1, actual - 2);
    let fin = Math.min(total, actual + 2);
    if (fin - inicio < 4) {
      if (inicio === 1) {
        fin = Math.min(total, inicio + 4);
      } else if (fin === total) {
        inicio = Math.max(1, fin - 4);
      }
    }
    const paginas: number[] = [];
    for (let i = inicio; i <= fin; i++) {
      paginas.push(i);
    }
    return paginas;
  }

  irAPagina(p: number) {
    if (p >= 1 && p <= this.totalPaginas) {
      this.pagina = p;
    }
  }

  paginaSiguiente() {
    if (this.pagina < this.totalPaginas) {
      this.pagina++;
    }
  }

  paginaAnterior() {
    if (this.pagina > 1) {
      this.pagina--;
    }
  }

  seleccionarCompra(compra: Compra) {
    this.compraSeleccionada = compra;
  }

  cerrarDetalle() {
    this.compraSeleccionada = null;
  }

  formatearCLP(valor: number): string {
    return valor.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 });
  }
}
