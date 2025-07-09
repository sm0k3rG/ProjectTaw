import { Routes } from '@angular/router';
import { ProductListComponent } from './page/admin/products/product-list/product-list.component';
import { OfferListComponent } from './page/admin/offer/offer-list/offer-list.component';
import { CategoryComponent } from './page/admin/products/category/category.component';
import { BranchListComponent } from './page/admin/branch/branch-list/branch-list.component';

export const routes: Routes = [
  { path: 'admin/products', component: ProductListComponent },
  { path: 'admin/offers', component: OfferListComponent },
  { path: 'admin/categories', component: CategoryComponent },
  { path: 'admin/branches', component: BranchListComponent },
];
