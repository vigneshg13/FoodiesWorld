import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesAddComponent } from './recipes/recipes-add/recipes-add.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import {AuthGuard} from './services/authguard.service';
import { RecipesOperationService } from './services/Recipes.operations.service'
import { HeaderComponent } from './header/header.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    RecipesAddComponent,
    LoginComponent,
    HeaderComponent,
    RecipeEditComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [AuthService,RecipesOperationService,AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [RecipeEditComponent]
})
export class AppModule { }
