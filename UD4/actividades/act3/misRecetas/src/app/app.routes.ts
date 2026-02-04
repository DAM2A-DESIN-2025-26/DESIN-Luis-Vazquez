import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard.spec';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-recetas',
    pathMatch: 'full',
  },
   {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'lista-recetas',
    loadComponent: () => import('./pages/lista-recetas/lista-recetas.page').then( m => m.ListaRecetasPage)
  },
   {
    path: 'receta-detalle/:id',
    loadComponent: () => import('./pages/receta-detalle/receta-detalle.page').then( m => m.RecetaDetallePage)
  },
  {
    path: 'receta-form',
    loadComponent: () => import('./pages/receta-form/receta-form.page').then( m => m.RecetaFormPage),
    canActivate: [authGuard]
  },
   {
    path: 'receta-form/:id',
    loadComponent: () => import('./pages/receta-form/receta-form.page').then( m => m.RecetaFormPage),
    canActivate: [authGuard]
  },


];
