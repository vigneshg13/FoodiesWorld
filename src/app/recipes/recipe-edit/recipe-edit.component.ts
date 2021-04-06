import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Recipe } from '../../model/recipe.model';
import { RecipesOperationService } from '../../services/Recipes.operations.service';
import { FormBuilder,  Validators, MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipeEditForm = this.formBuild.group({
    id: [''],
    dishName: [''],
    desc: [''],
    comments:[''] 
 });
   
  constructor(private formBuild : FormBuilder,public dialogRef: MatDialogRef<RecipeEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Recipe, private recipeOps:RecipesOperationService) { }

  ngOnInit() {
    this.setDataForEdit();
    console.log(this.data.id);
  }
  setDataForEdit() 
    {
      this.recipeEditForm.patchValue({
        id: this.data.id,
        dishName: this.data.name,
        desc: this.data.description,
        comments: this.data.comments
      });
    }
  editRecipe(){
    this.recipeOps.editRecipe(
      new Recipe (
        this.recipeEditForm.controls.id.value, 
        this.recipeEditForm.controls.dishName.value,
        this.recipeEditForm.controls.desc.value,
        this.recipeEditForm.controls.comments.value)).subscribe(
          resp => {
            console.log(resp);
            if (resp.status == 200 && resp.statusText === "OK"){
              this.dialogRef.close();  
            }
            else{
              alert("Error while Employee Update" + resp.body);
            }
          });

  }
  close() :void{
    this.dialogRef.close();
  }
}
