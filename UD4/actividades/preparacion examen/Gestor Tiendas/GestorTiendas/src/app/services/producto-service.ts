import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { environment } from 'src/environments/environment';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private httpClient = inject(HttpClient);

  public productos = signal<Producto[]>([]);

  constructor() {
    this.cargarProductos();
  }

  async cargarProductos() {
    try {
      const datos = await firstValueFrom(
        this.httpClient.get<Producto[]>(environment.apiURL)
      );
      this.productos.set(datos);
    } catch (error) {
      console.error('Error al cargar la API:', error);
    }
  }

  async getProductoId(id: number): Promise<Producto | undefined> {
    try {
      return await firstValueFrom(
        this.httpClient.get<Producto>(`${environment.apiURL}/${id}`)
      );
    } catch (error) {
      console.error('Error al obtener producto:', error);
      return undefined;
    }
  }

  async insertarProducto(item: Omit<Producto, 'id'>) {
    try {
      const nuevoProducto = await firstValueFrom(
        this.httpClient.post<Producto>(environment.apiURL, item)
      );

      this.productos.update(lista => [nuevoProducto, ...lista]);

    } catch (error) {
      console.error('Error al crear en la API:', error);
    }
  }

  async actualizarProducto(id: number, item: Producto) {
    try {

      const productoActualizado = await firstValueFrom(
        this.httpClient.put<Producto>(`${environment.apiURL}/${id}`, item)
      );

      this.productos.update(lista =>
        lista.map(producto => (producto.id === id ? productoActualizado : producto))
      );
    } catch (error) {
      console.error('Error al actualizar en la API:', error);
    }
  }

  async borrarProducto(id: number) {
    try {

      await firstValueFrom(this.httpClient.delete(`${environment.apiURL}/${id}`));

      this.productos.update(lista => lista.filter(producto => producto.id !== id));

    } catch (error) {
      console.error('Error al borrar en la API:', error);
    }
  }
}

