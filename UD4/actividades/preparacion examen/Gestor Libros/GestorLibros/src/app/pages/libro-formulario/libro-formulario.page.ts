import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonSelect, IonCheckbox,IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonNote, IonSelectOption, IonButton, IonInput } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from 'src/app/services/libro-service';
import { Libro } from 'src/app/intefaces/libro';

@Component({
  selector: 'app-libro-formulario',
  templateUrl: './libro-formulario.page.html',
  styleUrls: ['./libro-formulario.page.scss'],
  standalone: true,
  imports: [IonInput,
    IonButton,
    IonNote,
    IonItem,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonSelectOption, IonCheckbox, IonSelect]
})
export class LibroFormularioPage implements OnInit {

  route = inject(ActivatedRoute)
  router = inject(Router)
  libroService = inject(LibroService)

  esEdicion = false;
  idActual: string | null = null;

  form = new FormGroup({
    titulo: new FormControl('', [Validators.required, Validators.minLength(3)]),
    autor: new FormControl('', [Validators.required, Validators.minLength(3)]),
    genero: new FormControl('', Validators.required),
    leido: new FormControl(false),
  })

  constructor() { }

  async ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.esEdicion = true;
      this.idActual = idParam;

      const libroAEditar = await this.libroService.getLibroId(this.idActual)

      if (libroAEditar) {
        this.form.patchValue({
          titulo: libroAEditar.titulo,
          autor: libroAEditar.autor,
          genero:libroAEditar.genero,
          leido: Boolean(libroAEditar.leido)
        })
      }
    }
  }

  async guardar() {
    if (this.form.invalid) {
      return;
    }

    const datosForm = this.form.value;

    const libroBase = {
      titulo: datosForm.titulo!,
      autor: datosForm.autor!,
      genero: datosForm.genero!,
      leido: datosForm.leido!,
    }

    if (this.esEdicion && this.idActual) {
      await this.libroService.actualizarLibro(this.idActual,libroBase as Libro)
    }else{
      await this.libroService.insertarLibro(libroBase)
    }

    this.form.reset();
    this.router.navigate(['/libro-lista']);
  }



}
