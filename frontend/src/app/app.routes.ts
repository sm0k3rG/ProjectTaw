import { Routes } from '@angular/router';
import { ProductComponent } from './components/user/products/product/product.component';
import { ProductsListComponent } from './components/user/products/products-list/products-list.component';
import { CartComponent } from './components/user/carrito/cart/cart.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsListComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'cart', component: CartComponent }
];
