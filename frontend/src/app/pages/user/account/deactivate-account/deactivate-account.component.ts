import { Component, OnInit, inject } from '@angular/core';
import { CommonModule }               from '@angular/common';
import { UsersService }               from '../../../../services/users.service';
import { Router, RouterModule }       from '@angular/router';
import { UserProfile }                from '../../../../models/user-profile.model';

@Component({
  selector: 'app-deactivate-account',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './deactivate-account.component.html',
  styleUrls: ['./deactivate-account.component.css']
})
export class DeactivateAccountComponent implements OnInit {
  private userService = inject(UsersService);  // ← UsersService, no UserService
  private router      = inject(Router);

  profile?: UserProfile;
  loading = false;
  error   = false;
  processing = false;
  success    = false;

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    this.loading = true;
    this.error   = false;
    this.userService.getProfile().subscribe({
      next: p => {
        this.profile = p;
        this.loading = false;
      },
      error: () => {
        this.error   = true;
        this.loading = false;
      }
    });
  }

  onDeactivate(): void {
    if (!confirm('¿Confirmas que quieres desactivar tu cuenta?')) {
      return;
    }
    this.processing = true;
    this.error      = false;
    this.userService
      .deactivate(this.profile!.id)
      .subscribe({
        next: () => {
          this.success    = true;
          this.processing = false;
          setTimeout(() => this.router.navigate(['/login']), 3000);
        },
        error: () => {
          this.error      = true;
          this.processing = false;
        }
      });
  }
}
