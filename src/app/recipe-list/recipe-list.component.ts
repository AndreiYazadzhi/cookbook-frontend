import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeService} from '../recipe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getRecipes();
  }

  private getRecipes(): void {
    this.recipeService.getRecipeList().subscribe(data => {
      this.recipes = data;
    });
  }

  recipeDetails(id: number): void {
    this.router.navigate(['recipes', id]);
  }

  updateRecipe(id: number): void {
    this.router.navigate(['update', id]);
  }

  forkRecipe(id: number): void {
    this.router.navigate(['fork', id]);
  }

  deleteRecipe(id: number): void {
    this.recipeService.deleteRecipe(id).subscribe(data => {
      console.log(data);
      this.getRecipes();
    });
  }
}
