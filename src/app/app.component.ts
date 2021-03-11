import { Component } from "@angular/core";
import { PokemonService } from "./upload-bets/pokemon.service";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private PokemonService: PokemonService) {}

  ngOnInit() {
    this.getPokemon();
  }
  getPokemon() {
    this.PokemonService.getPokemon().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
