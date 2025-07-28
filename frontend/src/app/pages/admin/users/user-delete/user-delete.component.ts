import { Component, OnInit, inject } from '@angular/core';
import { CommonModule }               from '@angular/common';
import {
  ActivatedRoute,
  RouterModule,
  Router
} from '@angular/router';
import { UsersService }               from '../../../../services/users.service';
import { User }                       from '../../../../models/user.model';

@Component({
  selector: 'app-user-delete',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);
  private router = inject(Router);

  user?: User;
  loading = false;
  error   = false;
  processing = false;
  success    = false;

  ngOnInit(): void {
    this.loadUser();
  }

  // público para retry desde la plantilla
  loadUser(): void {
    this.loading = true;
    this.error   = false;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usersService.getById(id).subscribe({
      next: u => {
        this.user    = u;
        this.loading = false;
      },
      error: () => {
        this.error   = true;
        this.loading = false;
      }
    });
  }

  onDelete(): void {
    if (!this.user) return;
    if (
      !confirm(
        '¿Estás seguro de eliminar este usuario? Esta acción es permanente.'
      )
    ) {
      return;
    }
    this.processing = true;
    this.error      = false;
    this.usersService.delete(this.user.id).subscribe({
      next: () => {
        this.success    = true;
        this.processing = false;
        // Volver al listado tras 2s
        setTimeout(() => this.router.navigate(['/admin/users']), 2000);
      },
      error: () => {
        this.error      = true;
        this.processing = false;
      }
    });
  }
}
