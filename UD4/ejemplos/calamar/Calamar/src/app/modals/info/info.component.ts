import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar],
})
export class InfoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
