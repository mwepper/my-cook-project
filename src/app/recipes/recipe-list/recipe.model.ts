export class Recipe{
  public name: string;
  public desciption: string;
  public imagePath: string;


  constructor(name: string, desciption: string, imagePath: string) {
    this.name = name;
    this.desciption = desciption;
    this.imagePath = imagePath;
  }
}
