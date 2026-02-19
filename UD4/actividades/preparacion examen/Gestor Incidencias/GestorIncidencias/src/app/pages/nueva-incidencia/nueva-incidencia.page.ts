import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonInput, IonSelect, IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonNote, IonSelectOption } from '@ionic/angular/standalone';
import { IncidenciaService } from 'src/app/services/incidencia-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-incidencia',
  templateUrl: './nueva-incidencia.page.html',
  styleUrls: ['./nueva-incidencia.page.scss'],
  standalone: true,
  imports: [IonInput, IonSelect,ReactiveFormsModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonButton, IonNote, IonSelectOption, ]
})
export class NuevaIncidenciaPage implements OnInit {

  private incidenciaService = inject(IncidenciaService);
  private router = inject(Router)

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    titulo: new FormControl('', [Validators.required, Validators.minLength(3)]),
    descripcion: new FormControl('', [Validators.required]),
    prioridad: new FormControl('media', [Validators.required])
  });

  guardar(){
    if(this.form.invalid){
      return;
    }

    const datos = this.form.value;

    this.incidenciaService.crearIncidencia({
      title:datos.titulo!, body: datos.descripcion!, prioridad: datos.prioridad!
    })

    this.form.reset({
      prioridad: 'media',
      titulo: '',
      descripcion: ''
    });

    this.router.navigate(['/home'])
  }




}
