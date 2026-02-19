import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Libro } from '../intefaces/libro';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  private httpClient = inject(HttpClient);

  constructor() {
  }

  async cargarLibros() {
    try {
      const datos = await firstValueFrom(
        this.httpClient.get<Libro[]>(environment.apiURL)
      );
      //Si viniesen con un formato raro, seria hacer return datos.loquesea.lista || []
      //recorrer el objeto hasta devolver la lista que nos interesa
      return datos;
    } catch (error) {
      console.error('Error al cargar la API:', error);
      return []
    }
  }

  async getLibroId(id: string): Promise<Libro | undefined> {
    try {
      return await firstValueFrom(
        this.httpClient.get<Libro>(`${environment.apiURL}/${id}`)
      );
    } catch (error) {
      console.error('Error al obtener Libro:', error);
      return undefined;
    }
  }

  async insertarLibro(item: Omit<Libro, '_id'>) {
    try {
      const nuevoLibro = await firstValueFrom(
        this.httpClient.post<Libro>(environment.apiURL, item)
      );

      // this.productos.update(lista => [nuevoProducto, ...lista]);

    } catch (error) {
      console.error('Error al insertar en la API:', error);
    }
  }

  async actualizarLibro(id: string, libro: Libro) {
    try {

      const LibroActualizado = await firstValueFrom(
        this.httpClient.put<Libro>(`${environment.apiURL}/${id}`, libro)
      );

      // this.productos.update(lista =>
      //lista.map(producto => (producto.id === id ? productoActualizado : producto))
      //);
    } catch (error) {
      console.error('Error al actualizar en la API:', error);
    }
  }

  async borrarLibro(id: string) {
    try {

      await firstValueFrom(this.httpClient.delete(`${environment.apiURL}/${id}`));

      //this.productos.update(lista => lista.filter(producto => producto.id !== id));

    } catch (error) {
      console.error('Error al borrar en la API:', error);
    }
  }

}
