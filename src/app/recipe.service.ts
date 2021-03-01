import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Recipe} from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseURL = 'http://localhost:8081/recipes/';

  constructor(private httpClient: HttpClient) {
  }

  getRecipeList(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(this.baseURL);
  }

  createRecipe(recipe: Recipe): Observable<Recipe> {
    return this.httpClient.post<Recipe>(this.baseURL + 'add', recipe);
  }

  getRecipeById(id: number): Observable<Recipe> {
    return this.httpClient.get<Recipe>(this.baseURL + id);
  }

  showHistory(id: number): Observable<string[]> {
    return this.httpClient.get<string[]>(this.baseURL + 'history/' + id);
  }

  updateRecipe(id: number, recipe: Recipe): Observable<Recipe> {
    return this.httpClient.put<Recipe>(this.baseURL + id, recipe);
  }

  forkRecipe(id: number, recipe: Recipe): Observable<Recipe> {
    return this.httpClient.put<Recipe>(this.baseURL + 'fork/' + id, recipe);
  }

  deleteRecipe(id: number): Observable<Recipe> {
    return this.httpClient.delete<Recipe>(this.baseURL + id);
  }
}
