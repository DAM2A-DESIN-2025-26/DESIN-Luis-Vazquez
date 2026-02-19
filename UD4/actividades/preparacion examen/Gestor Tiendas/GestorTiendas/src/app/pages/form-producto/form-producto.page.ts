import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonItem, IonNote, IonSelectOption, IonButton, IonTextarea,IonInput, IonSelect} from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto-service';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.page.html',
  styleUrls: ['./form-producto.page.scss'],
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule, // <-- Necesario para formGroup
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons,
    IonMenuButton, IonItem, IonNote, IonSelectOption, IonButton,
    IonInput,      // <-- Conecta el ion-input al form
    IonTextarea,   // <-- Conecta el ion-textarea al form
    IonSelect]
})
export class FormProductoPage implements OnInit {
  route = inject(ActivatedRoute)
  router = inject(Router)
  productosService = inject(ProductoService)

  esEdicion = false;
  idActual: number | null = null;

  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('https://via.placeholder.com/150'),
  })
  constructor() { }

  async ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.esEdicion = true;
      this.idActual = Number(idParam);

      const productoAEditar = await this.productosService.getProductoId(this.idActual)

      if (productoAEditar) {
        this.form.patchValue({
          title: productoAEditar.title,
          price: productoAEditar.price.toString(),
          category: productoAEditar.category,
          description: productoAEditar.description,
          image: productoAEditar.image
        })
      }
    }
  }

  async guardar() {
    if (this.form.invalid) {
      return;
    }

    const datosForm = this.form.value;

    const productoBase = {
      title: datosForm.title!,
      price: Number(datosForm.price),
      category: datosForm.category!,
      description: datosForm.description!,
      image: datosForm.image!
    }

    if (this.esEdicion && this.idActual) {
      await this.productosService.actualizarProducto(this.idActual,productoBase as Producto)
    }else{
      await this.productosService.insertarProducto(productoBase)
    }

    this.form.reset();
    this.router.navigate(['/home']);
  }



}
