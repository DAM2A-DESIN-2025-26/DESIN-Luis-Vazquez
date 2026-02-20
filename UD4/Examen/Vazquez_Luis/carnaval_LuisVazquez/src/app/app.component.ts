import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { MenuLateralComponent } from "./components/menu-lateral/menu-lateral.component";
import { TabBarComponent } from "./components/tab-bar/tab-bar.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, MenuLateralComponent, TabBarComponent],
})
export class AppComponent {
  constructor() {}
}
