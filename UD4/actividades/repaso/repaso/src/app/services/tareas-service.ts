import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Tarea } from '../interfaces/tarea';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private httpClient = inject(HttpClient);

  tareas = signal<Tarea[]>([]);

  constructor() {
    this.getTareas();
  }

  async getTareas() {
    try {
      const datos = await firstValueFrom(this.httpClient.get<Tarea[]>(environment.apiURL))
      this.tareas.set(datos);

    } catch (error) {
      console.error(error)
    }
  }

  public cambiarEstado(id: number) {
    // Usamos .update() para modificar el valor actual de la señal
    this.tareas.update(listaActual =>
      // Recorremos la lista y buscamos la tarea con ese ID
      listaActual.map(tarea =>
        // Si es la tarea que busco, invierto su 'completed'. Si no, la dejo igual.
        tarea.id === id ? { ...tarea, completed: !tarea.completed } : tarea
      )
    );
  }

}
