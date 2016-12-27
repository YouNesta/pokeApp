import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../pokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {
  private pokemons: Pokemon[] = [];
  public choosenPage: boolean;
  constructor(private service: PokemonService, private router: Router) {
    console.log()
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
            var pokemon = new Pokemon(name, url);

            if(this.router.url === "/" && pokemon.isChoosen())
              this.pokemons.push(pokemon)
            if(this.router.url === "/pokemon")
              this.pokemons.push(pokemon)

          }
        },
        error => {
          console.log(error)
        }
      );
  }

  ngOnInit() {
    this.getPokemons(0);
  }

}
