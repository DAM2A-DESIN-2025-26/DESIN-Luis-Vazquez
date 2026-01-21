import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonContent, IonMenu, IonToolbar, IonTitle, IonList, IonMenuToggle, IonItem, IonLabel  } from "@ionic/angular/standalone";

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
  imports: [RouterLink, IonHeader, IonContent, IonMenu, IonToolbar, IonTitle, IonList, IonMenuToggle, IonItem, IonLabel],
})
export class MenuLateralComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
