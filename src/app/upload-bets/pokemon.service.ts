import { Injectable } from "@angular/core";

import {
  HttpClient,
  HttpRequest,
  HttpHeaders,
  HttpEvent
} from "@angular/common/http";
import { from, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  private baseUrl = "https://pokeapi.co/api/v2";

  constructor(private http: HttpClient) {}
  getPokemon() {
    return this.http.get<any>(this.baseUrl + "/pokemon/");
  }
}
