import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {
  esAdministrador = true; // Simulación, luego se reemplazará por la validación real

  @ViewChild('ventasChart') ventasChartRef!: ElementRef<HTMLCanvasElement>;
  ventasChart: Chart | undefined;

  ngAfterViewInit() {
    if (this.ventasChartRef) {
      this.ventasChart = new Chart(this.ventasChartRef.nativeElement, {
        type: 'bar',
        data: {
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
          datasets: [{
            label: 'Ventas',
            data: [65, 59, 80, 81],
            backgroundColor: '#0071ce'
          }]
        },
        options: {
          responsive: true
        }
      });
    }
  }
}
