import { Routes } from '@angular/router';

import { CounterPageComponent } from './pages/counter/counter-page';
import { HeroPageComponent } from './pages/hero/hero-page';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page';
import { DragonballDetalleComponent } from './pages/dragonball-detalle/dragonball-detalle.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent,
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPageComponent,
  },
   {
    path: 'dragonball-super/:id',
    component: DragonballDetalleComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
