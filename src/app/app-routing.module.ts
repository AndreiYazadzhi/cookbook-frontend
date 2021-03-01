import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {CreateRecipeComponent} from './create-recipe/create-recipe.component';
import {UpdateRecipeComponent} from './update-recipe/update-recipe.component';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {RecipeHistoryComponent} from './recipe-history/recipe-history.component';
import {ForkRecipeComponent} from './fork-recipe/fork-recipe.component';

const routes: Routes = [
  {path: 'recipes', component: RecipeListComponent},
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {path: 'add', component: CreateRecipeComponent},
  {path: 'update/:id', component: UpdateRecipeComponent},
  {path: 'recipes/:id', component: RecipeDetailsComponent},
  {path: 'history/:id', component: RecipeHistoryComponent},
  {path: 'fork/:id', component: ForkRecipeComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
