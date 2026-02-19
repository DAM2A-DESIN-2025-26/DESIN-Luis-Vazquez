import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'formulario',
    loadComponent: () => import('./pages/formulario/formulario.page').then( m => m.FormularioPage)
  },
   {
    path: 'formulario/:id',
    loadComponent: () => import('./pages/formulario/formulario.page').then( m => m.FormularioPage)
  },
   {
    path: 'detalle/:id',
    loadComponent: () => import('./pages/detalle-mascota/detalle-mascota.page').then( m => m.DetalleMascotaPage)
  },
];
