import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/bookstore/bookstore.component'),
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart.component'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
