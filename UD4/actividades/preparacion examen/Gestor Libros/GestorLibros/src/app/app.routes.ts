import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'libro-lista',
    pathMatch: 'full',
  },
  {
    path: 'libro-detalle/:id',
    loadComponent: () => import('./pages/libro-detalle/libro-detalle.page').then( m => m.LibroDetallePage)
  },
  {
    path: 'libro-lista',
    loadComponent: () => import('./pages/libro-lista/libro-lista.page').then( m => m.LibroListaPage)
  },
  {
    path: 'libro-formulario',
    loadComponent: () => import('./pages/libro-formulario/libro-formulario.page').then( m => m.LibroFormularioPage)
  },
    {
    path: 'libro-formulario/:id',
    loadComponent: () => import('./pages/libro-formulario/libro-formulario.page').then( m => m.LibroFormularioPage)
  },
];
