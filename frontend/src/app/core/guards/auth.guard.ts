import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      const user = this.authService.getCurrentUser();
      const redirectRoute = user?.role === 'Administrator' ? '/admin/products' : '/user/products';
      this.router.navigate([redirectRoute]);
      return false;
    }
    return true;
  }
}
