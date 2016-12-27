import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class PokemonService {

  private apiUrl = "http://pokeapi.co/api/v2/";

  constructor(private http: Http) {

  }

  getPokemons(page){
    var offset = page * 20;
    return this.http.get(this.apiUrl+"pokemon/?offset="+offset)
      .map(res =>res.json())
  }

  getPokemonById(id){
    return this.http.get(this.apiUrl+"pokemon/"+id)
      .map(res =>res.json())
  }

  getPokemonByUrl(url){
    return this.http.get(url)
      .map(res =>res.json())
  }
}
