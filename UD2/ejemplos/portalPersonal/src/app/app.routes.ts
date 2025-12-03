import { Routes } from '@angular/router';
import { Inicio } from '../pages/inicio/inicio';
import { MisHabilidades } from '../pages/mis-habilidades/mis-habilidades';
import { SobreMi } from '../pages/sobre-mi/sobre-mi';
import { Contacto } from '../pages/contacto/contacto';

export const routes: Routes = [
{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
{ path: 'inicio', component: Inicio },
{ path: 'habilidades', component: MisHabilidades },
{ path: 'sobreMi', component: SobreMi },
{ path: 'contacto', component: Contacto },
{ path: '**', redirectTo: 'inicio' }
];
