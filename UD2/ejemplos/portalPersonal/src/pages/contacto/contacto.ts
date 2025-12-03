import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class Contacto {
  nombre = signal('');
  email = signal('');
  mensaje = signal('');

  // Señal para saber si mostrar el resumen
  //enviado = signal(false);

  mostrarCampos(n: string, e: string, m: string) {
    //this.enviado.set(true);
    this.nombre.set(n);
    this.email.set(e);
    this.mensaje.set(m);
  }

}
