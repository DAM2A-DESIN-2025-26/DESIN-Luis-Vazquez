import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root',
})
export class DragonballService {
  private http = inject(HttpClient);

  personajes = signal<Personaje[]>([]);
  personaje = signal<Personaje | null>(null);
  cargando = signal(false);
  error = signal<string | null>(null);

  private apiUrl = 'https://dragonball-api.com/api';

  constructor() {}

  cargarPersonajes() {
    this.cargando.set(true);
    this.error.set(null);

    this.http.get<any>(this.apiUrl + '/characters?page=1&limit=5').subscribe({
      next: (resp) => {
        //cogemos los campos que necesitamos de los objetos de la respuesta y los adaptamos
        //el tipo que tenemos
        const personajesMapeados: Personaje[] = resp.items.map(
          (elemento: any) => ({
            id: elemento.id,
            name: elemento.name,
            ki: Number(elemento.ki.split('.').join('')),
            image: elemento.image,
          })
        );

        // Guardamos los personajes limpios
        this.personajes.set(personajesMapeados);
        this.cargando.set(false);
      },
      error: () => {
        this.error.set('Error al cargar los personajes desde la API');
        this.cargando.set(false);
      },
    });
  }

  cargarDetalle(id: number) {
    this.cargando.set(true);
    this.error.set(null);

    this.http.get<any>(this.apiUrl + '/characters/1').subscribe({
      next: (resp) => {
        //cogemos los campos que necesitamos de los objetos de la respuesta y los adaptamos
        //el tipo que tenemos
        const detallePersonaje: Personaje = resp.items.map((elemento: any) => ({
          id: elemento.id,
          name: elemento.name,
          ki: Number(elemento.ki.split('.').join('')),
          image: elemento.image,
        }));

        // Guardamos los personajes limpios
        this.personaje.set(detallePersonaje);
        this.cargando.set(false);
      },
      error: () => {
        this.error.set('Error al cargar el detalle de personaje desde la API');
        this.cargando.set(false);
      },
    });
  }

  addPersonaje(personaje: Personaje) {
    this.personajes.update((list) => [...list, personaje]);
  }
}
