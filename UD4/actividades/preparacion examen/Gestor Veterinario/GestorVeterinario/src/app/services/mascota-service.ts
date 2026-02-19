import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Mascota } from '../interfaces/mascotas';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  private httpClient = inject(HttpClient);

  constructor() {
  }

  async cargarMascotas() {
    try {
      const datos = await firstValueFrom(
        this.httpClient.get<Mascota[]>(environment.apiURL)
      );
      //Si viniesen con un formato raro, seria hacer return datos.loquesea.lista || []
      //recorrer el objeto hasta devolver la lista que nos interesa
      return datos;
    } catch (error) {
      console.error('Error al cargar la API:', error);
      return []
    }
  }

  async getMascotaId(id: string): Promise<Mascota | undefined> {
    try {
      return await firstValueFrom(
        this.httpClient.get<Mascota>(`${environment.apiURL}/${id}`)
      );
    } catch (error) {
      console.error('Error al obtener producto:', error);
      return undefined;
    }
  }

  async insertarMascota(item: Omit<Mascota, '_id'>) {
    try {
      const nuevaMascota = await firstValueFrom(
        this.httpClient.post<Mascota>(environment.apiURL, item)
      );

      // this.productos.update(lista => [nuevoProducto, ...lista]);

    } catch (error) {
      console.error('Error al crear en la API:', error);
    }
  }

  async actualizarMascota(id: string, mascota: Mascota) {
    try {

      const MascotaActualizada = await firstValueFrom(
        this.httpClient.put<Mascota>(`${environment.apiURL}/${id}`, mascota)
      );

      // this.productos.update(lista =>
      //lista.map(producto => (producto.id === id ? productoActualizado : producto))
      //);
    } catch (error) {
      console.error('Error al actualizar en la API:', error);
    }
  }

  async borrarMascota(id: string) {
    try {

      await firstValueFrom(this.httpClient.delete(`${environment.apiURL}/${id}`));

      //this.productos.update(lista => lista.filter(producto => producto.id !== id));

    } catch (error) {
      console.error('Error al borrar en la API:', error);
    }
  }
}
