import {EventEmitter, Injectable} from "@angular/core";

import {Recipe} from "./recipe-list/recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Schnitzel',
      'Simple Test',
      'https://storage.needpix.com/rsynced_images/gastronomy-2760200_1280.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Burger',
      'Simple Test 2',
      'https://c.pxhere.com/images/d0/54/15a09b734bfd3e341434c2191a94-1417896.jpg!d',
      [
        new Ingredient('Egg', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {

  }
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShopList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

}
