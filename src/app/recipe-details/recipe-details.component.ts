import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  id: number;

  recipe: Recipe;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.recipe = new Recipe();
    this.recipeService.getRecipeById(this.id).subscribe(data => {
      this.recipe = data;
    });
  }

  showHistory(id: number): void {
    this.router.navigate(['history', id]);
  }
}
