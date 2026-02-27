import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
  imports: [IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonLabel, RouterLink],
})
export class MenuLateralComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
