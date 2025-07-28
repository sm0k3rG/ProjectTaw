import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/user/products',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.component').then(m => m.LoginComponent),
    canActivate: [AuthGuard]
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
    path: 'register',
    loadComponent: () =>
      import('./pages/auth/register/register.component')
        .then(m => m.RegisterComponent)
  },
  {
    path: 'recover-password',
    loadComponent: () =>
      import('./pages/auth/recover-password/recover-password.component')
        .then(m => m.RecoverPasswordComponent)
  },
  {
    path: 'reset-password',
    loadComponent: () =>
      import('./pages/auth/reset-password/reset-password.component')
        .then(m => m.ResetPasswordComponent)
  },

  {
    path: 'user/products',
    loadComponent: () =>
      import('./pages/user/products/products-list/products-list.component')
        .then(m => m.ProductsListComponent)
  },
  {
    path: 'admin/dashboard',
    loadComponent: () => import('./pages/admin/dashboard/dashboard.component').then(m => m.DashboardComponent),
    // canActivate: [RoleGuard],
    // data: { role: 'admin' }
  },
  {
    path: 'admin/order-list',
    loadComponent: () => import('./pages/admin/orders/order-list/order-list.component').then(m => m.OrderListComponent),
    // canActivate: [RoleGuard],
    // data: { role: 'admin' }
  },
  {
    path: 'admin/products',
    loadComponent: () => import('./pages/admin/products/product-list/product-list.component').then(m => m.ProductListComponent),
    // canActivate: [RoleGuard],
    // data: { role: 'admin' }
  },
  {
    path: 'admin/offers',
    loadComponent: () => import('./pages/admin/offer/offer-list/offer-list.component').then(m => m.OfferListComponent),
    // canActivate: [RoleGuard],
    // data: { role: 'admin' }
  },
  {
    path: 'admin/categories',
    loadComponent: () => import('./pages/admin/products/category/category.component').then(m => m.CategoryComponent),
    // canActivate: [RoleGuard],
    // data: { role: 'admin' }
  },
  {
    path: 'admin/branches',
    loadComponent: () => import('./pages/admin/branch/branch-list/branch-list.component').then(m => m.BranchListComponent),
    // canActivate: [RoleGuard],
    // data: { role: 'admin' },
  },
  {
    path: 'user/product/:id',
    loadComponent: () =>
      import('./pages/user/products/product/product.component')
        .then(m => m.ProductComponent)
  },
  {
    path: 'user/cart',
    loadComponent: () =>
      import('./pages/user/cart/cart-sidebar/cart-sidebar.component')
        .then(m => m.CartSidebarComponent)
  },

  {
    path: 'order-confirmation/:orderId',
    loadComponent: () =>
      import('./pages/user/order-confirmation/order-confirmation.component')
        .then(m => m.OrderConfirmationComponent)
  },

  {
    path: 'account',
    loadComponent: () =>
      import('./pages/user/account/profile/profile.component')
        .then(m => m.ProfileComponent)
  },
  {
    path: 'account/additional-info',
    loadComponent: () =>
      import('./pages/user/account/additional-info/additional-info.component')
        .then(m => m.AdditionalInfoComponent)
  },
  {
    path: 'account/deactivate',
    loadComponent: () =>
      import('./pages/user/account/deactivate-account/deactivate-account.component')
        .then(m => m.DeactivateAccountComponent)
  },

  {
    path: 'user/purchase-history',
    loadComponent: () =>
      import('./pages/user/purchase-history/purchase-history.component')
        .then(m => m.PurchaseHistoryComponent)
  },
  {
    path: 'pedidos/:pedidoId/propio',
    loadComponent: () => import('./pages/user/order/order.component').then(m => m.OrderComponent)
  },


  {
    path: 'admin/products/:id/edit',
    loadComponent: () =>
      import('./pages/admin/products/product-edit/product-edit.component')
        .then(m => m.ProductEditComponent)
  },

  {
    path: 'admin/users',
    loadComponent: () =>
      import('./pages/admin/users/user-list/user-list.component')
        .then(m => m.UserListComponent)
  },
  {
    path: 'admin/users/new',
    loadComponent: () =>
      import('./pages/admin/users/user-create/user-create.component')
        .then(m => m.UserCreateComponent)
  },
  {
    path: 'admin/users/:id',
    loadComponent: () =>
      import('./pages/admin/users/user-detail/user-detail.component')
        .then(m => m.UserDetailComponent)
  },
  {
    path: 'admin/users/:id/edit',
    loadComponent: () =>
      import('./pages/admin/users/user-edit/user-edit.component')
        .then(m => m.UserEditComponent)
  },
  {
    path: 'admin/users/:id/deactivate',
    loadComponent: () =>
      import('./pages/admin/users/user-deactivate/user-deactivate.component')
        .then(m => m.UserDeactivateComponent)
  },
  {
    path: 'admin/users/:id/delete',
    loadComponent: () =>
      import('./pages/admin/users/user-delete/user-delete.component')
        .then(m => m.UserDeleteComponent)
  },
];
