import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonList, IonSelect, IonSelectOption, IonTitle, IonToolbar, NavController, ToastController, IonTextarea } from '@ionic/angular/standalone';
import { DummyJSONService } from 'src/app/services/dummy-jsonservice';

@Component({
  selector: 'app-receta-form',
  templateUrl: './receta-form.page.html',
  styleUrls: ['./receta-form.page.scss'],
  standalone: true,
  imports: [IonInput, IonList, IonButton, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSelect, IonSelectOption, ReactiveFormsModule, IonTextarea]
})
export class RecetaFormPage implements OnInit {

  private fb = inject(FormBuilder)
  private route = inject(ActivatedRoute)
  private navCtrl = inject(NavController)
  private toastCtrl = inject(ToastController)
  private recipeService = inject(DummyJSONService)

  recetaForm!: FormGroup;
  editMode: boolean = false;
  recipeId: number = 0

  constructor() {
    this.initform()
  }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id')

    if (idParam) {
      this.editMode = true;
      this.recipeId = +idParam;
      this.cargarDatosReceta(this.recipeId)
    }
  }

  initform() {
    this.recetaForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      difficulty: ['Easy', [Validators.required]],
      prepTimeMinutes: [10, [Validators.required, Validators.min(1)]],
      cookTimeMinutes: [10, [Validators.required, Validators.min(0)]],
      ingredients: ['', [Validators.required]],
      instructions: ['', [Validators.required]],

    })
  }

  cargarDatosReceta(recipeId: number) {
    this.recipeService.getRecipeId(recipeId).subscribe({
      next: (data) => {
        //tratamos los arrays para convertirlos en String
        const ingredientesString = Array.isArray(data.ingredients)
          ? data.ingredients.join(', ')
          : data.ingredients

        const instruccionesString = Array.isArray(data.instructions)
          ? data.instructions.join('\n')
          : data.instructions

        //añadimos la informacion a los campos del form

        this.recetaForm.patchValue({
          name: data.name,
          difficulty: data.difficulty,
          prepTimeMinutes: data.prepTimeMinutes,
          cookTimeMinutes: data.cookTimeMinutes,
          ingredients: ingredientesString,
          instructions: instruccionesString,
        })
      },
      error: (err) => console.error('Error cargando receta:', err)
    })
  }

  async guardar() {
    if (this.recetaForm.invalid) {
      return
    }

    const formValues = this.recetaForm.value;

    const recipeData = {
      ...formValues,
      //convertimos a array
      ingredients: formValues.ingredients.split(',').map((s: string) => s.trim()),
      instructions: formValues.instructions.split('\n').map((s: string) => s.trim())

    }

    if (this.editMode) {
      this.recipeService.actualizarRecipe(this.recipeId, recipeData).subscribe({
        next: () => this.finalizar('Receta actualizada correctamente'),
        error: (err) => console.log(err)
      })
    } else {
      this.recipeService.insertarRecipe(recipeData).subscribe({
        next: () => this.finalizar('Receta creada correctamente'),
        error: (err) => console.log(err)
      })
    }
  }

  async finalizar(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      color: 'success',
      position: 'bottom'
    });
    await toast.present();
    this.navCtrl.back(); // Volver al listado
  }


}
