import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonButton, IonContent, IonHeader, IonItem, IonNote, IonTitle, IonToolbar,IonInput, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Contacto } from 'src/app/interfaces/contacto';
import { ContactoService } from 'src/app/services/contacto-service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
  standalone: true,
  imports: [IonNote, IonButton, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, ReactiveFormsModule, IonInput, IonButtons, IonBackButton]
})
export class FormularioPage implements OnInit {

  private router = inject(Router)
  private route = inject(ActivatedRoute)
  private contactoService = inject(ContactoService)

  modoEdicion = false;
  contactoId: number = 0;
  esFavoritoActual = false;


  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
  })

  constructor() { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id')

    if (idParam) {
      this.modoEdicion = true
      this.contactoId = Number(idParam)

      const contactoEncontrado = this.contactoService.getContactoPorId(this.contactoId)

      if (contactoEncontrado) {
        this.esFavoritoActual = contactoEncontrado.esFavorito;

        this.form.patchValue({
          name: contactoEncontrado.name,
          email: contactoEncontrado.email,
          phone: contactoEncontrado.phone
        })
      }
    }
  }

  guardar() {
    if (this.form.invalid) {
      return;
    }

    const datosForm = this.form.value;

    if (this.modoEdicion) {
      const contactoEditado: Contacto = {
        id: this.contactoId,
        name: datosForm.name!,
        email: datosForm.email!,
        phone: datosForm.phone!,
        esFavorito: false
      };
      this.contactoService.actualizarContacto(contactoEditado);
    } else {
      this.contactoService.agregarContacto({
        name: datosForm.name!,
        email: datosForm.email!,
        phone: datosForm.phone!,
        esFavorito: false
      })
    }

    this.router.navigate(['/home'])
  }


}
