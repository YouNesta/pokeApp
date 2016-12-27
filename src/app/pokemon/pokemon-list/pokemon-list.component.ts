import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../pokemon";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {
  private pokemons: Pokemon[] = [];

  constructor(private service: PokemonService) {
    this.getPokemons(0);
  }

  getPokemons(page){
    this.service.getPokemons(page)
      .subscribe(
        response => {
          if(response.next){
            var superThis = this;
            setTimeout(function(){
              superThis.getPokemons(++page);
            }, 2000)
          }
          for(var i in response.results){
            var name = response.results[i].name;
            var url = response.results[i].url;
            this.pokemons.push(new Pokemon(name, url))
          }
        },
        error => {
          console.log(error)
        }
      );
  }

  ngOnInit() {
  }

}
