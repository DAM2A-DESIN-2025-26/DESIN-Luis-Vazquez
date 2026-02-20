import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { Desfile } from '../interfaces/desfile';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DesfileService {
  private httpClient = inject(HttpClient);

  async cargarDesfiles() {
    try {
      const datos = await firstValueFrom(
        this.httpClient.get<Desfile[]>(environment.apiURL + '/desfiles'),
      );
      return datos;
    } catch (error) {
      console.error('Error al cargar la API:', error);
      return [];
    }
  }

  async insertarDesfile(item:Desfile) {
    try {
      const resp = await lastValueFrom(this.httpClient.post<Desfile>(environment.apiURL + '/desfiles', item));
      console.log(resp);
    } catch (error) {
      console.error('Error al crear en la API:', error);
    }
  }
}
