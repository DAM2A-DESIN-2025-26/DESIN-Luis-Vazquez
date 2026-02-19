import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { MenuLateralComponent } from "./components/menu-lateral/menu-lateral.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, MenuLateralComponent],
})
export class AppComponent {
  constructor() {}
}
