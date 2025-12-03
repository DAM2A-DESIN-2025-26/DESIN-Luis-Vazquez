import { Routes } from '@angular/router';
import { App } from './app';
import { Counter } from './pages/Counter/Counter';
import { Hero } from './pages/hero/hero';
import { DragonBall } from './pages/dragon-ball/dragon-ball';
import { DragonBallSuper } from './pages/dragon-ball-super/dragon-ball-super';

export const routes: Routes = [
  {
    path: "",
    component: Counter
  },
  {
    path: "hero",
    component: Hero
  },
  {
    path: "dragonball",
    component: DragonBall
  },
    {
    path: "dragonballsuper",
    component: DragonBallSuper
  },
  {
    path: "**",
    redirectTo: ""
  }
];
