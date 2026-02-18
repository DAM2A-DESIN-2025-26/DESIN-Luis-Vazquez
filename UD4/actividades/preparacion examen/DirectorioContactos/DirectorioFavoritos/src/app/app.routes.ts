import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'nuevo',
    loadComponent: () => import('./pages/formulario/formulario.page').then( m => m.FormularioPage)
  },
   {
    path: 'editar/:id',
    loadComponent: () => import('./pages/formulario/formulario.page').then( m => m.FormularioPage)
  },
];
