import { Routes } from '@angular/router';
import { ProductComponent } from './components/user/products/product.component';
import { CartComponent } from './components/user/carrito/cart.component';
import { StoresMapComponent } from './components/user/stores/stores-map.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'stores', component: StoresMapComponent }
];
