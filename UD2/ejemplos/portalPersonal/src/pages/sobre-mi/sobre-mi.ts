import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.scss',
})
export class SobreMi {
  nombre = signal('Luis Vazquez');
  edad = signal(28);
  hobbies = signal(['Programar', 'Escuchar Música', 'Videojuegos', 'Baloncesto']);
}
