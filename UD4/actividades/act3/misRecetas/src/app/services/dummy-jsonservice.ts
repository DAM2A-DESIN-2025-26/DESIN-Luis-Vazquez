import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe, RecipeElement } from '../interfaces/Recipe';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DummyJSONService {
  private httpClient = inject(HttpClient);

  getRecipes(): Observable<Recipe> {
    return this.httpClient.get<Recipe>(environment.apiURL);
  }
  getRecipeId(id: number): Observable<RecipeElement> {
    return this.httpClient.get<RecipeElement>(`${environment.apiURL}/${id}`);
  }
  insertarRecipe(item: RecipeElement): Observable<RecipeElement> {
    return this.httpClient.post<RecipeElement>(environment.apiURL, item);
  }
  actualizarRecipe(item: RecipeElement): Observable<RecipeElement> {
    return this.httpClient.put<RecipeElement>(environment.apiURL, item);
  }
  borrarPost(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.apiURL}/${id}`);
  }

}
