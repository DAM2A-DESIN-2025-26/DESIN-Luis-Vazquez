import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private http = inject(HttpClient)
  private apiUrl = 'https://dummyjson.com/auth/login';

  isLoggedIn = signal<boolean>(!!localStorage.getItem('token'));

  login(username:string, password:string):Observable<any>{
    return this.http.post<any>(this.apiUrl, {username, password}).pipe(
      tap(response =>{
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response));

        this.isLoggedIn.set(true);
      })
    )
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.isLoggedIn.set(false);
  }

  isAuthenticated():boolean{
    return this.isLoggedIn();
  }

}
