import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-gastro',
  templateUrl: './gastro.page.html',
  styleUrls: ['./gastro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class GastroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nombre:string = "Luis"
  apellidos:string = "Vazquez Garcia"

}
