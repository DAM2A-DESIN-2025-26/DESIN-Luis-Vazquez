import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonLabel, IonTabBar, IonTabButton, IonTabs } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
  imports: [RouterLink, IonTabs, IonTabBar, IonTabButton,  IonLabel],
})
export class TabBarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
