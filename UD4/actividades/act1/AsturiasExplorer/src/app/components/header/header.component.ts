import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone:true,
  imports:[IonicModule]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  titulo:string = "esto es un titulo"
  subtitulo:string = "esto es un subtitulo"

}
