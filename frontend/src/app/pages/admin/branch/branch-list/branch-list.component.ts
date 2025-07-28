import { BranchService } from '../../../../core/services/branch.service';
import { Component, OnInit } from '@angular/core';
import { Branch } from '../../../../core/models/branch.interface';
import { MainNavbarComponent } from '../../../../shared/main-navbar/main-navbar.component';

@Component({
  selector: 'app-branch-list',
  standalone: true,
  imports: [MainNavbarComponent],
  templateUrl: './branch-list.component.html',
  styleUrl: './branch-list.component.css'
})
export class BranchListComponent implements OnInit{
  // Arreglo donde se almacenan las sucursales obtenidas del servicio
  sucursales: Branch[] = [];

  // Inyección del servicio que permite obtener las sucursales
  constructor(private BranchService: BranchService) {}

  // Al inicializar el componente, se obtienen las sucursales
  ngOnInit(): void {
    this.obtenerSucursales();
  }

  // Llama al servicio para obtener las sucursales y las asigna al arreglo
  obtenerSucursales(): void {
    this.BranchService.obtenerSucursal().subscribe({
      next: (sucursales: Branch[]) => {
        this.sucursales = sucursales;
      }
    });
  }
}
