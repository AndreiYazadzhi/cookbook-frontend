import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { FormsModule} from '@angular/forms';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeHistoryComponent } from './recipe-history/recipe-history.component';
import { ForkRecipeComponent } from './fork-recipe/fork-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    CreateRecipeComponent,
    UpdateRecipeComponent,
    RecipeDetailsComponent,
    RecipeHistoryComponent,
    ForkRecipeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
