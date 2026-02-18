import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonItem, IonLabel, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-item-producto',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.scss'],
  imports: [IonItem, IonLabel, IonButton],
})
export class ItemProductoComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  @Input({ required: true }) nombre!: String;
  @Output() productoAnadido = new EventEmitter<void>();
  @Output() productoEliminado = new EventEmitter<void>();

  anadirProductoAlCarro(event: Event) {
    event.stopPropagation();
    this.productoAnadido.emit()
  }

  eliminarProductoCarro(event: Event) {
    event.stopPropagation();
    this.productoEliminado.emit()
  }

}
