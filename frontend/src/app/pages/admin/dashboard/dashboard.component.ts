import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Chart from 'chart.js/auto';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';

// Interfaces para los datos esperados del backend
interface SucursalVentas {
  sucursal: string;
  cantidad: number;
}

interface ProductoVentas {
  producto: string;
  cantidad: number;
}

interface UsuariosPorRegion {
  region: string;
  cantidad: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {
  esAdministrador = true; // Simulación, luego se reemplazará por la validación real

  // Menú de selección de vista
  vistas = [
    { key: 'ventasSucursal', label: 'Ventas por Sucursal' },
    { key: 'usuariosRegion', label: 'Usuarios por Región' },
    { key: 'topProductos', label: 'Top 10 Productos Más Vendidos' },
    { key: 'bottomProductos', label: 'Top 10 Productos Menos Vendidos' }
  ];
  vistaSeleccionada = 'ventasSucursal';

  // Referencias a los canvas de las gráficas
  @ViewChild('ventasSucursalChart') ventasSucursalChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('usuariosRegionChart') usuariosRegionChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('topProductosChart') topProductosChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('bottomProductosChart') bottomProductosChartRef!: ElementRef<HTMLCanvasElement>;

  ventasSucursalChart: Chart | undefined;
  usuariosRegionChart: Chart | undefined;
  topProductosChart: Chart | undefined;
  bottomProductosChart: Chart | undefined;

  // Datos mockeados (simulación hasta recibir datos del backend)
  ventasTotales = 28500000; // Ejemplo en CLP
  ventasPorSucursal: SucursalVentas[] = [
    { sucursal: 'Sucursal Santiago', cantidad: 12000000 },
    { sucursal: 'Sucursal Valparaíso', cantidad: 9000000 },
    { sucursal: 'Sucursal Concepción', cantidad: 7500000 }
  ];
  usuariosPorRegion: UsuariosPorRegion[] = [
    { region: 'Región Metropolitana', cantidad: 60 },
    { region: 'Valparaíso', cantidad: 40 },
    { region: 'Biobío', cantidad: 30 },
    { region: 'Araucanía', cantidad: 20 }
  ];
  top10Productos: ProductoVentas[] = [
    { producto: 'Producto 1', cantidad: 50 },
    { producto: 'Producto 2', cantidad: 45 },
    { producto: 'Producto 3', cantidad: 40 },
    { producto: 'Producto 4', cantidad: 38 },
    { producto: 'Producto 5', cantidad: 35 },
    { producto: 'Producto 6', cantidad: 33 },
    { producto: 'Producto 7', cantidad: 30 },
    { producto: 'Producto 8', cantidad: 28 },
    { producto: 'Producto 9', cantidad: 25 },
    { producto: 'Producto 10', cantidad: 22 }
  ];
  bottom10Productos: ProductoVentas[] = [
    { producto: 'Producto 91', cantidad: 2 },
    { producto: 'Producto 92', cantidad: 3 },
    { producto: 'Producto 93', cantidad: 4 },
    { producto: 'Producto 94', cantidad: 5 },
    { producto: 'Producto 95', cantidad: 6 },
    { producto: 'Producto 96', cantidad: 7 },
    { producto: 'Producto 97', cantidad: 8 },
    { producto: 'Producto 98', cantidad: 9 },
    { producto: 'Producto 99', cantidad: 10 },
    { producto: 'Producto 100', cantidad: 11 }
  ];

  // Utilidad para formatear CLP
  formatCLP(value: number): string {
    return value.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 });
  }

  ngAfterViewInit() {
    this.renderAllCharts();
  }

  renderAllCharts() {
    // Ventas por Sucursal
    if (this.ventasSucursalChartRef) {
      if (this.ventasSucursalChart) this.ventasSucursalChart.destroy();
      this.ventasSucursalChart = new Chart(this.ventasSucursalChartRef.nativeElement, {
        type: 'bar',
        data: {
          labels: this.ventasPorSucursal.map(v => v.sucursal),
          datasets: [{
            label: 'Ventas por Sucursal',
            data: this.ventasPorSucursal.map(v => v.cantidad),
            backgroundColor: '#28a745'
          }]
        },
        options: {
          responsive: true,
          indexAxis: 'y',
          plugins: {
            tooltip: {
              callbacks: {
                label: (context: any) => this.formatCLP(context.parsed.x)
              }
            }
          }
        }
      });
    }
    // Usuarios por Región
    if (this.usuariosRegionChartRef) {
      if (this.usuariosRegionChart) this.usuariosRegionChart.destroy();
      this.usuariosRegionChart = new Chart(this.usuariosRegionChartRef.nativeElement, {
        type: 'bar',
        data: {
          labels: this.usuariosPorRegion.map(u => u.region),
          datasets: [{
            label: 'Usuarios por Región',
            data: this.usuariosPorRegion.map(u => u.cantidad),
            backgroundColor: '#ffc107'
          }]
        },
        options: {
          responsive: true,
          indexAxis: 'y'
        }
      });
    }
    // Top 10 productos más vendidos
    if (this.topProductosChartRef) {
      if (this.topProductosChart) this.topProductosChart.destroy();
      this.topProductosChart = new Chart(this.topProductosChartRef.nativeElement, {
        type: 'bar',
        data: {
          labels: this.top10Productos.map(p => p.producto),
          datasets: [{
            label: 'Top 10 Más Vendidos',
            data: this.top10Productos.map(p => p.cantidad),
            backgroundColor: '#17a2b8'
          }]
        },
        options: {
          responsive: true,
          indexAxis: 'y'
        }
      });
    }
    // Bottom 10 productos menos vendidos
    if (this.bottomProductosChartRef) {
      if (this.bottomProductosChart) this.bottomProductosChart.destroy();
      this.bottomProductosChart = new Chart(this.bottomProductosChartRef.nativeElement, {
        type: 'bar',
        data: {
          labels: this.bottom10Productos.map(p => p.producto),
          datasets: [{
            label: 'Top 10 Menos Vendidos',
            data: this.bottom10Productos.map(p => p.cantidad),
            backgroundColor: '#dc3545'
          }]
        },
        options: {
          responsive: true,
          indexAxis: 'y'
        }
      });
    }
  }

  onVistaChange() {
    setTimeout(() => this.renderAllCharts(), 0);
  }
}
