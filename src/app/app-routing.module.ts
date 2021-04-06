import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from './login/login.component';
import {RecipesListComponent} from './recipes/recipes-list/recipes-list.component';
import {RecipesAddComponent} from './recipes/recipes-add/recipes-add.component';
import { AuthGuard } from './services/authguard.service';


const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'login',component:LoginComponent},
  {path: 'recipes',canActivate:[AuthGuard], component:RecipesListComponent},
  {path: 'recipe/add', canActivate:[AuthGuard], component:RecipesAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
