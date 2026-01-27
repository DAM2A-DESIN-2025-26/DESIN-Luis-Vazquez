import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-list',
  imports: [RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList implements OnInit{

  private userService = inject(UserService);

  usuarios: User[] = []

  ngOnInit(): void {
      this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.userService.getUsers().subscribe({
      next: (data)=>{
        this.usuarios = data;
        console.log("usuarios cargados: "+ data)
      },
      error: (e) => console.error("Error cargando usuarios:" , e)
    });
  }

  borrarUsuario(id:number | undefined){
    if(!id) return;

    if(confirm('¿Estás seguro de que quieres borrar este usuario?')){
      this.userService.deleteUser(id).subscribe({
        next: () =>{
          this.cargarUsuarios();
          alert("usuario borrado correctamente")
        },
        error: (e) => console.error("Error al borrar", e)
      })
    }

  }

}
