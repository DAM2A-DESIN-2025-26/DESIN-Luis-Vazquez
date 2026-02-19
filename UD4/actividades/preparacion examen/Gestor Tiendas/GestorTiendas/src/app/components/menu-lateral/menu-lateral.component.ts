import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonMenu, IonList, IonMenuToggle, IonItem, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
  imports: [IonLabel, IonItem, IonList, IonContent, IonMenu, IonMenuToggle, RouterLink],
})
export class MenuLateralComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
