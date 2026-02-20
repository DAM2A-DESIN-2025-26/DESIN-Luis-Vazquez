import { inject, Injectable } from '@angular/core';
import { Participante } from '../interfaces/participante';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ParticipanteService {
  private httpClient = inject(HttpClient);

  async getParticipanteId(id: number): Promise<Participante | undefined> {
    try {
      return await firstValueFrom(
        this.httpClient.get<Participante>(`${environment.apiURL}/participantes/${id}`),
      );
    } catch (error) {
      console.error('Error al obtener producto:', error);
      return undefined;
    }
  }
}
