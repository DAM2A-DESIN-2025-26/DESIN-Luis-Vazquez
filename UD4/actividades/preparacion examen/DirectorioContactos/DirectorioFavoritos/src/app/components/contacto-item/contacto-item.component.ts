import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto';
import { IonItem, IonIcon, IonLabel } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { create, heart, heartOutline, trash } from 'ionicons/icons';

@Component({
  selector: 'app-contacto-item',
  templateUrl: './contacto-item.component.html',
  styleUrls: ['./contacto-item.component.scss'],
  imports: [IonItem, IonIcon, IonLabel],
})
export class ContactoItemComponent  implements OnInit {

  constructor() {
    addIcons({heart,heartOutline, trash, create})
  }

  ngOnInit() {}

  @Input({required:true}) contacto!:Contacto;

  @Output() estadoCambiado = new EventEmitter<number>();

  @Output() borradoSolicitado = new EventEmitter<number>();

  @Output() edicionSolicitada = new EventEmitter<number>();

  favorito(){
    this.estadoCambiado.emit(this.contacto.id)
  }

  borrar(event:Event){
    event.stopPropagation();
    this.borradoSolicitado.emit(this.contacto.id)
  }

    editar(event:Event){
    event.stopPropagation();
    this.edicionSolicitada.emit(this.contacto.id)
  }
}
