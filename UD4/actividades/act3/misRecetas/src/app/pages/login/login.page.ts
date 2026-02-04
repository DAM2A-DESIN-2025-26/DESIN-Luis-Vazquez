import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, ToastController, IonList, IonItem, IonButton } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services/auth.service.spec';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonButton]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  authService = inject(AuthService)
  router = inject(Router)
  toastCtrl = inject(ToastController)

  credenciales = {
    username: "emilys",
    password: "emilyspass"
  }

  login(){
    this.authService.login(this.credenciales.username, this.credenciales.password).subscribe({
      next: () =>{
        this.router.navigate(['/lista-recetas'])
      },
      error: async() =>{
        const toast = await this.toastCtrl.create({
          message: "usuario o contraseña incorrectos",
          duration: 2000,
          color: "danger",
          position: "bottom"
        });
        toast.present()
      }
    })
  }

}
