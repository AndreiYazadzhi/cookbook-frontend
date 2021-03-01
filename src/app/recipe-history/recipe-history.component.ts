import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-history',
  templateUrl: './recipe-history.component.html',
  styleUrls: ['./recipe-history.component.css']
})
export class RecipeHistoryComponent implements OnInit {

  id: number;
  recipesString: string[];
  recipes: Recipe[] = [];

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.recipeService.showHistory(this.id).subscribe(data => {
      this.recipesString = data;
      this.recipesString.forEach(el => this.recipes.push(JSON.parse(el)));
    });
  }
}
