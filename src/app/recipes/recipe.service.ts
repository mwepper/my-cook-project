import {EventEmitter} from "@angular/core";

import {Recipe} from "./recipe-list/recipe.model";

export class RecipeService{
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('TestRec', 'Simple Test', 'https://storage.needpix.com/rsynced_images/gastronomy-2760200_1280.jpg'),
    new Recipe('TestRec2', 'Simple Test 2', 'https://c.pxhere.com/images/d0/54/15a09b734bfd3e341434c2191a94-1417896.jpg!d')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
