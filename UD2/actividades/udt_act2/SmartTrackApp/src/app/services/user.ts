import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // Inyectamos HttpClient para poder hacer peticiones a la API
  private http = inject(HttpClient);

  // URL del backend indicada en el PDF
  private apiUrl = 'https://daw2a26-1.iesmontenaranco.com/api/usuarios';

  // 1. Obtener todos los usuarios (GET)
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // 2. Obtener un usuario por DNI (GET)
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  // 3. Crear usuario (POST)
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  // 4. Actualizar usuario (PUT)
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  // 5. Borrar usuario (DELETE) - Aunque dice pendiente, lo dejamos listo
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
