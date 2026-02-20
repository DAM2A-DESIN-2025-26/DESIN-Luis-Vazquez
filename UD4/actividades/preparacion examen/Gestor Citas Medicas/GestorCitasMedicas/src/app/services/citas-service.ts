import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Cita } from '../interfaces/cita';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CitasService {
   private httpClient = inject(HttpClient);

  //public citas = signal<Cita[]>([]);

  constructor() {
    this.cargarCitas();
  }

  async cargarCitas() {
    try {
      const datos = await firstValueFrom(
        this.httpClient.get<Cita[]>(environment.apiURL)
      );
      return datos;
      //this.citas.set(datos);
    } catch (error) {
      console.error('Error al cargar la API:', error);
      return []
    }
  }

  async getCitaId(id: number): Promise<Cita | undefined> {
    try {
      return await firstValueFrom(
        this.httpClient.get<Cita>(`${environment.apiURL}/${id}`)
      );
    } catch (error) {
      console.error('Error al obtener cita:', error);
      return undefined;
    }
  }

  async insertarCita(item: Omit<Cita, 'id'>) {
    try {
      await firstValueFrom(
        this.httpClient.post<Cita>(environment.apiURL, item)
      );

     // this.citas.update(lista => [nuevoProducto, ...lista]);

    } catch (error) {
      console.error('Error al crear en la API:', error);
    }
  }

  async actualizarCita(id: number, item: Cita) {
    try {

      const citaActualizada = await firstValueFrom(
        this.httpClient.put<Cita>(`${environment.apiURL}/${id}`, item)
      );

     // this.citas.update(lista =>
       // lista.map(cita => (cita.id === id ? citaActualizada : cita))
      //);
    } catch (error) {
      console.error('Error al actualizar en la API:', error);
    }
  }

  async borrarCita(id: number) {
    try {

      await firstValueFrom(this.httpClient.delete(`${environment.apiURL}/${id}`));

    //  this.productos.update(lista => lista.filter(producto => producto.id !== id));

    } catch (error) {
      console.error('Error al borrar en la API:', error);
    }
  }

}
