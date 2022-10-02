import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes'
import {PokemonService} from '../pokemon.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  age : number = 0

  hero: Hero = {
    id: 1,
    name: "Windstorm"
  }

  heroes = HEROES
  
  pokemonName : string = "enter pokemon name"
  pokemon : any
  // other : any

  constructor(private callPokemon:PokemonService, private http: HttpClient) {}

  

  getPokemon(){
    this.callPokemon.getData(this.pokemonName)
    .subscribe(data => {
          this.pokemon = data}
    )
  }


  // getData(){
  //   return this.http.get("https://pokeapi.co/api/v2/pokemon/ditto").subscribe((data) => {
  //     this.other = data
  //   })
  // }

  increase(){
    this.age += 1
  }

  ngOnInit(): void {
  }

}
