import { BranchService } from '../../../../core/services/branch.service';
import { Component, OnInit } from '@angular/core';
import { Branch } from '../../../../core/models/branch.interface';

@Component({
  selector: 'app-branch-list',
  standalone: true,
  imports: [],
  templateUrl: './branch-list.component.html',
  styleUrl: './branch-list.component.css'
})
export class BranchListComponent implements OnInit{
  sucursales: Branch[] = [];

  constructor(private BranchService: BranchService) {}

  ngOnInit(): void {
    this.obtenerSucursales();
  }

  obtenerSucursales(): void {
    this.BranchService.obtenerSucursal().subscribe({
      next: (sucursales: Branch[]) => {
        this.sucursales = sucursales;
        console.log(sucursales);
      }
    });
  }
}
