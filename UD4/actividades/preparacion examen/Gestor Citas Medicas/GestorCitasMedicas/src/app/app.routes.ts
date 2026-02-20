import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'listado',
    pathMatch: 'full',
  },
  {
    path: 'listado',
    loadComponent: () => import('./pages/listado/listado.page').then( m => m.ListadoPage)
  },
  {
    path: 'detalle/:id',
    loadComponent: () => import('./pages/detalle/detalle.page').then( m => m.DetallePage)
  },
  {
    path: 'formulario-cita',
    loadComponent: () => import('./pages/formulario-cita/formulario-cita.page').then( m => m.FormularioCitaPage)
  },
    {
    path: 'formulario-cita/:id',
    loadComponent: () => import('./pages/formulario-cita/formulario-cita.page').then( m => m.FormularioCitaPage)
  },
];
