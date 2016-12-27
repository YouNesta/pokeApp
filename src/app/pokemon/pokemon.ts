import {PokemonService} from "./pokemon.service";

export class Pokemon {
  private id: Number;
  public image: String;
  public name: String;

  constructor(name: String, url: String){
    var splittedUrl = url.split('/');
    this.id = Number(splittedUrl[6]);
    this.name = name;
    this.image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.id+".png";
  }
}
