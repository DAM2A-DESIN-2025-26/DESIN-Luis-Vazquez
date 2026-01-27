import { Routes } from '@angular/router';
import { DashboardPage } from './dashboard/dashboard.page';
import { PerfilPage } from './dashboard/perfil/perfil.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardPage,
    children: [
      {
        path: 'juegos',
        loadComponent: () =>
          import('./dashboard/juegos/juegos.page').then((m) => m.JuegosPage),
      },
      {
        path: 'tienda',
        loadComponent: () =>
          import('./dashboard/tienda/tienda.page').then((m) => m.TiendaPage),
      },
      {
        path: 'perfil',
        component: PerfilPage,
        children: [
          {
            path: '',
            redirectTo: 'configuracion',
            pathMatch: 'full',
          },
          {
            path: 'configuracion',
            loadComponent: () =>
              import('./dashboard/perfil/configuracion/configuracion.page').then(
                (m) => m.ConfiguracionPage,
              ),
          },
          {
            path: 'estadisticas',
            loadComponent: () =>
              import('./dashboard/perfil/estadisticas/estadisticas.page').then(
                (m) => m.EstadisticasPage,
              ),
          },
        ],
      },
    ],
  },

  {
    path: 'juego-detalle/:id',
    loadComponent: () =>
      import('./juego-detalle/juego-detalle.page').then(
        (m) => m.JuegoDetallePage,
      ),
  },
];
