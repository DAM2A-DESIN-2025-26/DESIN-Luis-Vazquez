import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink], // Importante: ReactiveFormsModule para el form
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss'
})
export class UserFormComponent implements OnInit {

  private fb = inject(FormBuilder);
  private userService = inject(UserService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  form: FormGroup;
  editMode = false; // ¿Estamos editando o creando?
  currentId: number | null = null; // Para guardar el DNI si estamos editando

  constructor() {
    // Definimos los campos del formulario y sus validaciones
    this.form = this.fb.group({
      dni: ['', [Validators.required]],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      fecha_nacimiento: ['']
    });
  }

  ngOnInit(): void {
    // Capturamos el ID como string
    const idString = this.route.snapshot.paramMap.get('id');

    if (idString) {
      // CAMBIO: Convertimos a número con Number()
      this.currentId = Number(idString);
      this.editMode = true;
      this.cargarDatosUsuario(this.currentId);
  }
}

  cargarDatosUsuario(id: number) {
   this.userService.getUser(id).subscribe({
      next: (user: any) => {
        // ... lógica de fecha igual que antes ...
        if (user.fecha_nacimiento) {
             const fechaString = typeof user.fecha_nacimiento === 'string'
                ? user.fecha_nacimiento
                : new Date(user.fecha_nacimiento).toISOString();
            user.fecha_nacimiento = fechaString.split('T')[0];
        }
        this.form.patchValue(user);
      },
      error: (e) => console.error(e)
    });
  }

  onSubmit() {
   if (this.form.invalid) return;
    const userData: User = this.form.value;

    if (this.editMode && this.currentId) {
      // Pasamos currentId que ya es número
      this.userService.updateUser(this.currentId, userData).subscribe({
        next: () => { /* ... */ },
        error: (e) => console.error(e)
      });
    } else {
      // CREAR
      this.userService.createUser(userData).subscribe({
        next: () => {
          alert('Usuario creado correctamente');
          this.router.navigate(['/usuarios']); // Volver al listado
        },
        error: (e) => console.error('Error al crear', e)
      });
    }
  }
}
