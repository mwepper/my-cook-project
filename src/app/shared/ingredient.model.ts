export class Ingredient{
  // A la place de la section 1), on peut simplifié avec section 2)
  // 1)
/*
  public name: string;
  public amount: number;
  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
*/
  // 2)
  constructor(public name: string, public amount: number) {
  }
}
