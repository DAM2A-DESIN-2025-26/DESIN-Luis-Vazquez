import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'disfraces',
    pathMatch: 'full',
  },
  {
    path: 'disfraces',
    loadComponent: () => import('./pages/disfraces/disfraces.page').then( m => m.DisfracesPage)
  },
  {
    path: 'desfiles',
    loadComponent: () => import('./pages/desfiles/desfiles.page').then( m => m.DesfilesPage)
  },
  {
    path: 'participantes-detalle/:id',
    loadComponent: () => import('./pages/participantes-detalle/participantes-detalle.page').then( m => m.ParticipantesDetallePage)
  },
  {
    path: 'formulario-desfile',
    loadComponent: () => import('./pages/formulario-desfile/formulario-desfile.page').then( m => m.FormularioDesfilePage)
  },
];
