import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Incidencia } from '../interfaces/incidencia';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IncidenciaService {
  httpClient = inject(HttpClient);
  incidencias = signal<Incidencia[]>([]);

  constructor() {
    this.cargarIncidencias();
  }
  async cargarIncidencias() {
    try {
      const datos = await firstValueFrom(
        this.httpClient.get<Incidencia[]>(environment.apiURL),
      );

      const incidenciasFormateadas: Incidencia[] = datos.map((item) => ({
        id: item.id,
        title: item.title,
        body: item.body,
        estado: 'abierta',
        prioridad: 'media',
      }));

      this.incidencias.set(incidenciasFormateadas);
    } catch (error) {
      console.error(error);
    }
  }

  resolverIncidencia(id: number) {
    this.incidencias.update((lista) =>
      lista.map((inc) =>
        inc.id === id ? { ...inc, estado: 'resuelta' } : inc,
      ),
    );
  }
   reabrirIncidencia(id: number) {
    this.incidencias.update((lista) =>
      lista.map((inc) =>
        inc.id === id ? { ...inc, estado: 'abierta' } : inc,
      ),
    );
  }

  crearIncidencia(datos:{title:string, body:string, prioridad:string }){
    const listaActual = this.incidencias();

    const nuevoId = listaActual.length > 0
    ? Math.max(...listaActual.map(i => i.id)) + 1
    : 1;

    const nuevaIncidencia: Incidencia = {
      id:nuevoId,
      title:datos.title,
      body: datos.body,
      prioridad: datos.prioridad,
      estado: "abierta"
    }

    this.incidencias.update(lista => [nuevaIncidencia, ...lista])
  }

  borrarIncidencia(id:number){
    this.incidencias.update((lista) =>
      lista.filter(inc => inc.id !== id)
    )
  }

}
