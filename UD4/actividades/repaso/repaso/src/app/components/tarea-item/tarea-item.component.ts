import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/interfaces/tarea';
import { IonItem, IonCheckbox, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tarea-item',
  templateUrl: './tarea-item.component.html',
  styleUrls: ['./tarea-item.component.scss'],
  imports: [IonItem, IonCheckbox, IonLabel],
})
export class TareaItemComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input({required:true}) tarea!: Tarea;

  @Output() estadoCambiado = new EventEmitter<number>();

  onCheckChange(){
    this.estadoCambiado.emit(this.tarea.id);
  }

}
