import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const estaLogueado = localStorage.getItem('token')

  if (estaLogueado) {
    return true;
  }else{
    router.navigate(['/home'])
    return false;
  }

};
