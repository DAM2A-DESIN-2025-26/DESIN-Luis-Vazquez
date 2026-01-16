import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-gastro',
  templateUrl: './gastro.page.html',
  styleUrls: ['./gastro.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent, FooterComponent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton]
})
export class GastroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tituloPlato:string = "Fabada";
  descripcion:string = "La mejor fabada asturiana del planeta"

}
