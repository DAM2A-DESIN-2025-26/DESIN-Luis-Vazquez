import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  noticiaTitulo:string = "Titulo de una noticia"
  noticiaTexto:string = "Texto de una noticia"

}
