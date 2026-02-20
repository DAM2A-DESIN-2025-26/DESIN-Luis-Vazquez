import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Disfraz } from '../interfaces/disfraz';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DisfrazService {
    private httpClient = inject(HttpClient);

    async cargarDisfraces() {
    try {
      const datos = await firstValueFrom(
        this.httpClient.get<Disfraz[]>(environment.apiURL+"/disfraces")
      );
      //Si viniesen con un formato raro, seria hacer return datos.loquesea.lista || []
      //recorrer el objeto hasta devolver la lista que nos interesa
      return datos;
    } catch (error) {
      console.error('Error al cargar la API:', error);
      return []
    }
  }
}
