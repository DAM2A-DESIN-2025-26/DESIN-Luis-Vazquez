import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personajes } from '../interfaces/personajes';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  private http = inject(HttpClient);

  personajes = signal<Personajes[]>([]);
  cargando = signal(false);
  error = signal<string | null>(null);

  private apiUrl = 'https://dragonball-api.com/api';

  constructor() {}

  cargarPersonajes() {
    this.cargando.set(true);
    this.error.set(null);

    this.http.get<any>(this.apiUrl+"/characters?page=1&limit=5").subscribe({
      next: (resp) => {

        //cogemos los campos que necesitamos de los objetos de la respuesta y los adaptamos
        //el tipo que tenemos
        const personajesMapeados: Personajes[] = resp.items.map((elemento: any) => ({
          id: elemento.id,
          name: elemento.name,
          ki: Number(elemento.ki.split('.').join('')),
          image: elemento.image,
        }));

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

  }

  addPersonaje(personaje: Personajes) {
    this.personajes.update((list) => [...list, personaje]);
  }
}
