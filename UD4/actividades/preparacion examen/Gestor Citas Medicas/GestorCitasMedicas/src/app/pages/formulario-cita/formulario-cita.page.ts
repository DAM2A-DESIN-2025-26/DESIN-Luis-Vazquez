import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonInput, IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonNote, IonButton, IonLabel, IonDatetime } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { CitasService } from 'src/app/services/citas-service';
import { Cita } from 'src/app/interfaces/cita';

@Component({
  selector: 'app-formulario-cita',
  templateUrl: './formulario-cita.page.html',
  styleUrls: ['./formulario-cita.page.scss'],
  standalone: true,
  imports: [IonDatetime, IonLabel, IonButton, IonNote, IonInput ,ReactiveFormsModule ,IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FormularioCitaPage implements OnInit {

  route = inject(ActivatedRoute)
  router = inject(Router)
  citaService = inject(CitasService)

  esEdicion = false;
  idActual: number | null = null;

  form = new FormGroup({
    fecha: new FormControl('', [Validators.required]),
    paciente: new FormControl('', Validators.required),
    especialidad: new FormControl('', Validators.required),
  })
  constructor() { }

  async ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.esEdicion = true;
      this.idActual = Number(idParam);

      const citaAEditar = await this.citaService.getCitaId(this.idActual)

      if (citaAEditar) {
        this.form.patchValue({
          //fecha: citaAEditar.fecha.toISOString(),
          paciente: citaAEditar.paciente,
          especialidad: citaAEditar.especialidad
        })
      }
    }
  }

  async guardar() {
    if (this.form.invalid) {
      return;
    }

    const datosForm = this.form.value;

    const citaBase = {
      fecha: new Date(datosForm.fecha!),
      paciente: datosForm.paciente!,
      especialidad: datosForm.especialidad!,
    }

    if (this.esEdicion && this.idActual) {
      await this.citaService.actualizarCita(this.idActual,citaBase as Cita)
    }else{
      await this.citaService.insertarCita(citaBase)
    }

    this.form.reset();
    this.router.navigate(['/listado']);
  }


}
