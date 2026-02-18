import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { ContactoService } from '../services/contacto-service';
import { ContactoItemComponent } from "../components/contacto-item/contacto-item.component";
import { AlertController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, ContactoItemComponent, IonFab, IonFabButton, RouterLink, IonIcon],
})
export class HomePage {
  constructor() {
    addIcons({add})
  }

  contactosService = inject(ContactoService);
  private alertCtrl = inject(AlertController);
  private router = inject(Router)

  cambiarEstado(id:number){
    this.contactosService.cambiarEstado(id);
  }

  async confirmarBorrado(id: number){
    const alert = await this.alertCtrl.create({
      header: "confirmar",
      message: "Estas seguro que desea eliminar este contacto?",
      buttons:[
        {
          text:"Cancelar",
          role: "cancel",
          handler: () =>{
            console.log("borrado cancelado")
          }
        },
        {
          text:"Borrar",
          role: "confirm",
          handler: () =>{
            this.contactosService.borrarItem(id);
          }
        },
      ]
    })

    await alert.present();
  }
irAEditar(id: number) {
  this.router.navigate(['/editar', id]); // Navega a /editar/5
}

}
