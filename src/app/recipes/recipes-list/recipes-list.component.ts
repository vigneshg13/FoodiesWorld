import { Component, OnInit } from '@angular/core';
import {Recipe} from './../../model/recipe.model';
import {RecipesOperationService} from './../../services/Recipes.operations.service';
import { MatDialog } from '@angular/material/dialog';
import {RecipeEditComponent} from './../recipe-edit/recipe-edit.component';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  
  recipes: Recipe[]
  constructor(private recipeService: RecipesOperationService, public dialog:MatDialog) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe( 
     response => {
       this.recipes = response;
     },
    );
  }
  onDelete(id:number) {
    console.log("recipe id"+id);
    this.recipeService.deleteRecipe(id).subscribe();
    this.recipeService.getRecipes().subscribe( 
      response => {
        this.recipes = response;
      }
     );
  }
  onEdit(recipe:Recipe){
   const dialogref = this.dialog.open(RecipeEditComponent,{
     width:'250px',
     data:recipe
   });
   dialogref.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.recipeService.getRecipes().subscribe( 
      response => {
        this.recipes = response;
      }
     );
  }); 
  }
}
