import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonButton, IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonNote, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Mascota } from 'src/app/interfaces/mascotas';
import { MascotaService } from 'src/app/services/mascota-service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
  standalone: true,
  imports: [ IonCheckbox, IonButton, IonNote, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonInput, IonSelectOption, IonSelect]
})
export class FormularioPage implements OnInit {

 route = inject(ActivatedRoute)
  router = inject(Router)
  mascotaService = inject(MascotaService)

  esEdicion = false;
  idActual: string | null = null;

  form = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    especie: new FormControl('', Validators.required),
    edad: new FormControl(0, Validators.required),
    urgencia: new FormControl(false),
  })
  constructor() { }

  async ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.esEdicion = true;
      this.idActual = idParam;

      const mascotaAEditar = await this.mascotaService.getMascotaId(this.idActual)

      if (mascotaAEditar) {
        this.form.patchValue({
          nombre: mascotaAEditar.nombre,
          especie: mascotaAEditar.especie,
          edad: Number(mascotaAEditar.edad),
          urgencia: Boolean(mascotaAEditar.urgencia)
        })
      }
    }
  }

  async guardar() {
    if (this.form.invalid) {
      return;
    }

    const datosForm = this.form.value;

    const mascotaBase = {
      nombre: datosForm.nombre!,
      especie: datosForm.especie!,
      edad: datosForm.edad!,
      urgencia: datosForm.urgencia!,
    }

    if (this.esEdicion && this.idActual) {
      await this.mascotaService.actualizarMascota(this.idActual,mascotaBase as Mascota)
    }else{
      await this.mascotaService.insertarMascota(mascotaBase)
    }

    this.form.reset();
    this.router.navigate(['/home']);
  }


}
