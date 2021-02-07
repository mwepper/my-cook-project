import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('TestRec', 'Simple Test', 'https://storage.needpix.com/rsynced_images/gastronomy-2760200_1280.jpg'),
    new Recipe('TestRec2', 'Simple Test 2', 'https://c.pxhere.com/images/d0/54/15a09b734bfd3e341434c2191a94-1417896.jpg!d')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);

  }
}
