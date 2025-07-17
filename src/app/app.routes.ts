import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/bookstore/bookstore-page'),
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart-page'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
