import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'lista-recetas',
    pathMatch: 'full',
  },
  {
    path: 'lista-recetas',
    loadComponent: () => import('./pages/lista-recetas/lista-recetas.page').then( m => m.ListaRecetasPage)
  },
   {
    path: 'receta-detalle',
    loadComponent: () => import('./pages/receta-detalle/receta-detalle.page').then( m => m.RecetaDetallePage)
  },
  {
    path: 'receta-form',
    loadComponent: () => import('./pages/receta-form/receta-form.page').then( m => m.RecetaFormPage)
  },
];
