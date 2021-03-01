import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-fork-recipe',
  templateUrl: './fork-recipe.component.html',
  styleUrls: ['./fork-recipe.component.css']
})
export class ForkRecipeComponent implements OnInit {
  recipe: Recipe = new Recipe();
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.recipeService.getRecipeById(this.id).subscribe(data => {
      this.recipe = data;
    }, error => console.log(error));
  }

  onSubmit(): void {
    this.recipeService.forkRecipe(this.id, this.recipe).subscribe(data => {
      this.goToRecipeList();
    }, error => console.log(error));
  }

  goToRecipeList(): void {
    this.router.navigate(['/recipes']);
  }
}
