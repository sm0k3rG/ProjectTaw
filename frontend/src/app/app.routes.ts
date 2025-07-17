import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/admin/products/product-list/product-list.component';
import { OfferListComponent } from './pages/admin/offer/offer-list/offer-list.component';
import { CategoryComponent } from './pages/admin/products/category/category.component';
import { BranchListComponent } from './pages/admin/branch/branch-list/branch-list.component';
import { OrderComponent } from './pages/user/order/order.component';
import { PaymentComponent } from './pages/user/payment/payment.component';

export const routes: Routes = [
  { path: 'admin/products', component: ProductListComponent },
  { path: 'admin/offers', component: OfferListComponent },
  { path: 'admin/categories', component: CategoryComponent },
  { path: 'admin/branches', component: BranchListComponent },
  { path: 'user/order/:usuarioId', component: OrderComponent},
  { path: 'user/payment/:usuarioId', component: PaymentComponent}
];
