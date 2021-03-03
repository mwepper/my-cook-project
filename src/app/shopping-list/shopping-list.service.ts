import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient [] = [
    new Ingredient('Orange', 5),
    new Ingredient('Tomate', 10)
  ];

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  getIngredient(){
    return this.ingredients;
  }

  addIngredients(ingredients: Ingredient[]){
    // 1. avec une loop, mais attention, bcp d'evt créée
    /*
    for(let ingredient: ingredients){
      this.addIngredient(ingredient);
    }
     */
    this.ingredients.push(...ingredients); //syntaxe ES6 qui indique qu'on ajoute tous les ingredients de la liste[] et non pas l'objet en lui meme
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
