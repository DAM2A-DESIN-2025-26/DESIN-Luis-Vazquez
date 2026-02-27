import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'geolocalizacion',
    pathMatch: 'full',
  },
  {
    path: 'geolocalizacion',
    loadComponent: () => import('./pages/geolocalizacion/geolocalizacion.page').then( m => m.GeolocalizacionPage)
  },
  {
    path: 'camara',
    loadComponent: () => import('./pages/camara/camara.page').then( m => m.CamaraPage)
  },
  {
    path: 'notificaciones',
    loadComponent: () => import('./pages/notificaciones/notificaciones.page').then( m => m.NotificacionesPage)
  },
  {
    path: 'idioma',
    loadComponent: () => import('./pages/idioma/idioma.page').then( m => m.IdiomaPage)
  },
];
