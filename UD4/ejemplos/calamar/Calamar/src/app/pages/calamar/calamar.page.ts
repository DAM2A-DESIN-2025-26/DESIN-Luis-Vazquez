import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonHeader, IonButtons, IonToolbar, IonMenuButton, IonTitle } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calamar',
  templateUrl: './calamar.page.html',
  styleUrls: ['./calamar.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonHeader, IonButtons, IonToolbar, IonMenuButton, IonTitle]
})
export class CalamarPage implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
