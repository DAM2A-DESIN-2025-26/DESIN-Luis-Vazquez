import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Desfile } from 'src/app/interfaces/desfile';
import { IonItem, IonLabel, IonToggle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-item-desfile',
  templateUrl: './item-desfile.component.html',
  styleUrls: ['./item-desfile.component.scss'],
  imports: [IonItem, IonLabel, IonToggle],
})
export class ItemDesfileComponent  implements OnInit {

  @Input({ required: true }) desfile!: Desfile;


  constructor() {}

  ngOnInit() {}


}
