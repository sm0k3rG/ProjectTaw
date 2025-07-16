import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'recover-password',
    loadComponent: () => import('./pages/auth/recover-password/recover-password.component').then(m => m.RecoverPasswordComponent)
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./pages/auth/reset-password/reset-password.component').then(m => m.ResetPasswordComponent)
  },
  {
    path: 'admin/dashboard',
    loadComponent: () => import('./pages/admin/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'user/order-list',
    loadComponent: () => import('./pages/user/orders/order-list/order-list.component').then(m => m.OrderListComponent)
  },
  {
    path: 'user/purchase-history',
    loadComponent: () => import('./pages/user/purchase-history/purchase-history.component').then(m => m.PurchaseHistoryComponent)
  }
];
