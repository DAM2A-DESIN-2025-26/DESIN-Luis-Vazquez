import { Routes } from '@angular/router';
import { UserList } from './components/user-list/user-list';
import { UserFormComponent } from './components/user-form/user-form';

export const routes: Routes = [
  { path: 'usuarios', component: UserList },
  { path: 'usuarios/nuevo', component: UserFormComponent },
  { path: 'usuarios/editar/:id', component: UserFormComponent },
  { path: '**', redirectTo: 'usuarios' },
];
