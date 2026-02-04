import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonMenuToggle, IonItem, IonLabel } from '@ionic/angular/standalone';
import { AuthService } from './services/auth.service.spec';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonMenuToggle, IonItem, IonLabel],
})
export class AppComponent {

  authService = inject(AuthService);
  private router = inject(Router);

  handleAuthAction() {
    if (this.authService.isLoggedIn()) {
      this.authService.logout();
      this.router.navigate(['/lista-recetas']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
