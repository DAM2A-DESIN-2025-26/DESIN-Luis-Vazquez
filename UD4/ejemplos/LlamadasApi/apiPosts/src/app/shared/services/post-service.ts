import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/Posts';
import { environment } from 'src/environments/environment';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private httpClient = inject(HttpClient)

  getDatos():Observable<Post[]>{
    return this.httpClient.get<Post[]>(environment.apiURL+"/posts")
  }

  insertaPost(item:Post):Observable<Post>{
    return this.httpClient.post<Post>(`${environment.apiURL}/posts`,item)
  }

  borrarPost(id:number):Observable<number>{
    return this.httpClient.delete<number>(`${environment.apiURL}/posts/${id}`)
  }

  getAllCapacitor():Promise<Post[]>{
    return CapacitorHttp.get({
      url: `${environment.apiURL}/posts`,
    }).then((response: HttpResponse)=>{
      return response.data as Post[]
    });
  }
}
