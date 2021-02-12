import {Ingredient} from "../shared/ingredient.model";

export class ShoppingListService {
  private ingredients: Ingredient [] = [
    new Ingredient('Orange', 5),
    new Ingredient('Tomate', 10)
  ];

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
