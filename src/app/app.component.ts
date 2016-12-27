import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'PokeApp';
  constructor(){
    if(localStorage.getItem("pokemon") == null){
      var pokedex = new Array(811);
      localStorage.setItem("pokedex", JSON.stringify(pokedex))
    }
  }
}
