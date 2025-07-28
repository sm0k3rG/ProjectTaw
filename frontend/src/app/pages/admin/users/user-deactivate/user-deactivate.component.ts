import { Component, OnInit, inject } from '@angular/core';
import { CommonModule }               from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { UsersService }              from '../../../../services/users.service';
import { User }                      from '../../../../models/user.model';

@Component({
  selector: 'app-user-deactivate',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-deactivate.component.html',
  styleUrls: ['./user-deactivate.component.css']
})
export class UserDeactivateComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);
  private router = inject(Router);

  user?: User;
  loading = false;
  error = false;
  processing = false;
  success = false;

  ngOnInit(): void {
    this.loadUser();
  }

  // ← Ahora es público para ser llamado desde el HTML
  loadUser(): void {
    this.loading = true;
    this.error = false;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usersService.getById(id).subscribe({
      next: u => {
        this.user = u;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  onDeactivate(): void {
    if (!this.user) return;
    if (!confirm('¿Estás seguro de desactivar este usuario?')) {
      return;
    }
    this.processing = true;
    this.error = false;
    this.usersService.deactivate(this.user.id).subscribe({
      next: () => {
        this.success = true;
        this.processing = false;
        if (this.user) this.user.active = false;
        setTimeout(() => this.router.navigate(['/admin/users']), 2000);
      },
      error: () => {
        this.error = true;
        this.processing = false;
      }
    });
  }
}
