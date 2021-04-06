import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators, MaxLengthValidator } from '@angular/forms';
import { RecipesOperationService } from '../../services/Recipes.operations.service';
import { Recipe } from '../../model/recipe.model';
@Component({
  selector: 'app-recipes-add',
  templateUrl: './recipes-add.component.html',
  styleUrls: ['./recipes-add.component.css']
})
export class RecipesAddComponent implements OnInit {

  constructor(private formBuild : FormBuilder, private recipeOps:RecipesOperationService) { }

  ngOnInit() {
  }
  isAddComplete:boolean = false;
  recipeForm = this.formBuild.group({
     id: ['', Validators.required, Validators.maxLength(5)],
     dishName: ['', Validators.required],
     desc: [''],
     comments:[''] 
  });

  addRecipe(){
    if(this.recipeForm.invalid){
      alert("Invalid Input");
      return;
    }
    this.recipeOps.addRecipe(
      new Recipe (
        this.recipeForm.controls.id.value, 
        this.recipeForm.controls.dishName.value,
        this.recipeForm.controls.desc.value,
        this.recipeForm.controls.comments.value)).subscribe(
          resp => {
            console.log(resp);
            if (resp.status == 201 && resp.statusText === "Created"){
              this.recipeForm.reset();   
              this.isAddComplete = true;

            }
          }
        );
      }
  }

