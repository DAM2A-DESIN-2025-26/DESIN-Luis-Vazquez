import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonNote, IonButton, IonLabel, IonDatetime } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { DesfileService } from '../../services/desfile-service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-formulario-desfile',
  templateUrl: './formulario-desfile.page.html',
  styleUrls: ['./formulario-desfile.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

],
})
export class FormularioDesfilePage implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  desfileService = inject(DesfileService);

  form = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    slug: new FormControl(''),
    fecha: new FormControl('', Validators.required),
    ciudad: new FormControl('', Validators.required),
    destacado: new FormControl(false),
  });
  constructor() {}

  async ngOnInit() {}

  async guardar() {
    if (this.form.invalid) {
      return;
    }

    const datosForm = this.form.value;

    const desfileBase = {
      id:0,
      nombre: datosForm.nombre!,
      slug: datosForm.slug!,
      fecha: datosForm.fecha!,
      ciudad: datosForm.ciudad!,
      destacado: datosForm.destacado!
    };

    await this.desfileService.insertarDesfile(desfileBase);

    this.form.reset();
    this.router.navigate(['/desfiles']);
  }
}
