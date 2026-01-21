import { Routes } from '@angular/router';
import { CalamarPage } from './pages/calamar/calamar.page';

export const routes: Routes = [
  {
    path: 'calamar',
    loadComponent: () =>
      import('./pages/calamar/calamar.page').then((m) => m.CalamarPage),
  },
  {
    path: '',
    redirectTo: 'calamar',
    pathMatch: 'full',
  },
  {
    path: 'calamar',
    component: CalamarPage,
    children: [
      {
        path: '',
        redirectTo: 'cuadrado',
        pathMatch: 'full',
      },
      {
        path: 'triangulo',
        loadComponent: () =>
          import('./pages/calamar/triangulo/triangulo.page').then(
            (m) => m.TrianguloPage,
          ),
      },
      {
        path: 'circulo',
        loadComponent: () =>
          import('./pages/calamar/circulo/circulo.page').then(
            (m) => m.CirculoPage,
          ),
      },
      {
        path: 'cuadrado',
        loadComponent: () =>
          import('./pages/calamar/cuadrado/cuadrado.page').then(
            (m) => m.CuadradoPage,
          ),
      },
    ],
  },
];
