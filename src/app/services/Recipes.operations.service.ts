import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {tap} from 'rxjs/operators';

import {Recipe} from './../model/recipe.model';

export class RecipesOperationService {
recipes : Observable<Recipe[]>;
constructor(private http:HttpClient){}

getRecipes(): Observable<Recipe[]>{
 
    this.recipes = this.http.get<Recipe[]>('/api/recipes').pipe(
        tap(_ => {}));
    return this.recipes;
}
addRecipe(recipe:Recipe) :Observable<HttpResponse<Recipe>> {
    return this.http.post<Recipe>('/api/recipes/',recipe,{observe:'response'});
}

deleteRecipe(id:number){
    const url = '/api/recipes/'+id;
    console.log(url);
    return this.http.delete(url);
}
editRecipe(recipe:Recipe) :Observable<HttpResponse<Recipe>>{
    const url = '/api/recipes/'+recipe.id;    
    return this.http.put<Recipe>(url,recipe,{observe:'response'});
}
}