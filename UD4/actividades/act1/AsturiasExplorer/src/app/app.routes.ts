import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () =>
      import('./pages/inicio/inicio.page').then((m) => m.InicioPage),
  },
  {
    path: 'rutas',
    loadComponent: () =>
      import('./pages/rutas/rutas.page').then((m) => m.RutasPage),
  },
  {
    path: 'gastro',
    loadComponent: () =>
      import('./pages/gastro/gastro.page').then((m) => m.GastroPage),
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
];
