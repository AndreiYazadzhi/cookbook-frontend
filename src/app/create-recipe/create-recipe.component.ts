import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeService} from '../recipe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  recipe: Recipe = new Recipe();

  constructor(private recipeService: RecipeService,
              private router: Router) {
  }

  ngOnInit(): void {
  }
  saveRecipe(): void {
    this.recipeService.createRecipe(this.recipe).subscribe( data => {
      console.log(data);
      this.goToRecipeList();
    }, error => console.log(error));
  }

  goToRecipeList(): void {
    this.router.navigate(['/recipes']);
  }

  onSubmit(): void {
    console.log(this.recipe);
    this.saveRecipe();
  }

}
