import { Injectable } from "@angular/core";
import {map} from 'rxjs/operators';

import {
  HttpClient,
  HttpRequest,
  HttpHeaders,
  HttpEvent
} from "@angular/common/http";
import { from, Observable, pipe } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  private baseUrl = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) {}
  
  getPokemon(nombrePokemon: String) {
    return this.http.get<any>(this.baseUrl + nombrePokemon);    
  }
}
