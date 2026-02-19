import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Libro } from 'src/app/intefaces/libro';
import { IonItem, IonLabel, IonIcon, IonButton } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { checkmarkDoneOutline } from 'ionicons/icons'

@Component({
  selector: 'app-libro-item',
  templateUrl: './libro-item.component.html',
  styleUrls: ['./libro-item.component.scss'],
  imports: [IonItem, IonLabel, IonIcon, IonButton],
})
export class LibroItemComponent implements OnInit {

  constructor() {
    addIcons({ 'checkmark-done-outline': checkmarkDoneOutline })
  }

  ngOnInit() { }

  @Input({ required: true }) libro!: Libro;

  @Output() libroDetallado = new EventEmitter<string>();
  @Output() libroEditado = new EventEmitter<string>();
  @Output() libroBorrado = new EventEmitter<string>();


  onDetalle(event: Event) {
    event.stopPropagation();
    this.libroDetallado.emit();

  }
  onEditar(event: Event) {
    event.stopPropagation();
    this.libroEditado.emit();
  }
  onBorrar(event: Event) {
    event.stopPropagation();
    this.libroBorrado.emit();
  }

}
