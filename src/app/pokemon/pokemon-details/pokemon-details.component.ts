import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Pokemon} from "../pokemon";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.sass']
})
export class PokemonDetailsComponent implements OnInit {
  public pokemon: Pokemon = new Pokemon();

  constructor(private route: ActivatedRoute, private service: PokemonService) {
    let id = +this.route.snapshot.params['id'];
    this.service.getPokemonById(id)
      .subscribe(
        response => {
          this.pokemon = new Pokemon(response.name, "https://pokeapi.com/api/v1/pokemon/"+id+"/");
          this.pokemon.setDetails(response)
          console.log(this.pokemon)
        },
        error => {
          console.log(error)
        }
      );
  }

  ngOnInit() {


  }

}
