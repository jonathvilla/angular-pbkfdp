import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormControl } from '@angular/forms';

import { PokemonComponent } from "./pokemon.component";

import { from } from "rxjs";
@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [PokemonComponent],
  bootstrap: [PokemonComponent]
})
export class PokemonModule {}