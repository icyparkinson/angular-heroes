import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  getData(name:string){
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`
    return this.http.get(url)
  }
}
