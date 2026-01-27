import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// 1. IMPORTAR HERRAMIENTAS DE FORMULARIO
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
// 2. IMPORTAR COMPONENTES VISUALES (Input, Toggle, List, Item)
import {
  IonContent, IonHeader, IonTitle, IonToolbar, NavController,
  AlertController, IonButton, IonAlert,
  IonList, IonItem, IonInput, IonToggle // <--- ESTOS FALTABAN ANTES
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonButton,
    IonAlert,
    IonList,
    IonItem,
    IonInput,
    IonToggle
  ],
})
export class ConfiguracionPage implements OnInit {

  // Variable para el formulario
  perfilForm: FormGroup;

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private fb: FormBuilder
  ) {
    this.perfilForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      edad: ['', [Validators.min(13), Validators.max(99)]],
      notificaciones: [false] // Checkbox/Toggle empieza en false
    });
  }

  ngOnInit() {}

  // Lógica para guardar el formulario
  async guardarPerfil() {
    if (this.perfilForm.valid) {
      const datos = this.perfilForm.value;

      const alert = await this.alertCtrl.create({
        header: 'Datos Guardados',
        message: JSON.stringify(datos, null, 2),
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  public botonesNormas = ['Entendido'];

  async activarNotificaciones() {
    const alert = await this.alertCtrl.create({
      header: 'Preferencias',
      message: 'Notificaciones de lanzamientos activadas',
      buttons: ['OK'],
    });
    await alert.present();
  }

  volverPerfil() {
    this.navCtrl.pop();
  }
}
