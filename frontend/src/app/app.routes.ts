import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'user/products',
    loadComponent: () => import('./pages/user/products/products-list/products-list.component').then(m => m.ProductsListComponent)
  },
  {
    path: 'user/product/:id',
    loadComponent: () => import('./pages/user/products/product/product.component').then(m => m.ProductComponent)
  },
  {
    path: 'user/cart',
    loadComponent: () => import('./pages/user/cart/cart/cart.component').then(m => m.CartComponent)
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
    path: 'admin/order-list',
    loadComponent: () => import('./pages/admin/orders/order-list/order-list.component').then(m => m.OrderListComponent)
  },
  {
    path: 'admin/products',
    loadComponent: () => import('./pages/admin/products/product-list/product-list.component').then(m => m.ProductListComponent)
  },
  {
    path: 'admin/offers',
    loadComponent: () => import('./pages/admin/offer/offer-list/offer-list.component').then(m => m.OfferListComponent)
  },
  {
    path: 'admin/categories',
    loadComponent: () => import('./pages/admin/products/category/category.component').then(m => m.CategoryComponent)
  },
  {
    path: 'admin/branches',
    loadComponent: () => import('./pages/admin/branch/branch-list/branch-list.component').then(m => m.BranchListComponent)
  },
  {
    path: 'user/purchase-history',
    loadComponent: () => import('./pages/user/purchase-history/purchase-history.component').then(m => m.PurchaseHistoryComponent)
  },
  {
    path: 'user/order/:pedidoId/:usuarioId',
    loadComponent: () => import('./pages/user/order/order.component').then(m => m.OrderComponent)
  },
  {
    path: 'user/payment/:usuarioId',
    loadComponent: () => import('./pages/user/payment/payment.component').then(m => m.PaymentComponent)
  }
];
