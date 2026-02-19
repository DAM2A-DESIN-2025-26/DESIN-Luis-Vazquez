import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
   {
    path: 'producto-detalle/:id',
    loadComponent: () => import('./pages/producto-detalle/producto-detalle.page').then( m => m.ProductoDetallePage)
  },
  {
    path: 'gestion',
    loadComponent: () => import('./pages/form-producto/form-producto.page').then( m => m.FormProductoPage),
  },
    {
    path: 'gestion/:id',
    loadComponent: () => import('./pages/form-producto/form-producto.page').then( m => m.FormProductoPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
