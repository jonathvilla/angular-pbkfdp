import { Component, OnInit } from "@angular/core";
import { PokemonService } from "./pokemon.service";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.css"]
})
export class PokemonComponent implements OnInit {

  nombre: string;
  pokemones;
  Model: any = {
    nombre: '',
    tipo: '',
    imagenes:''
  }
  movimientos: string[] = [];
 
getDataForName(name: any) {
throw new Error("Method not implemented.");
} 
constructor(private PokemonService: PokemonService) {}

  ngOnInit() {

  }

  inicializarVariables(): void{
    this.movimientos.length = 0;
  }


  getPokemon() {
    this.PokemonService.getPokemon(this.nombre).subscribe(
      pokemon =>{
        this.inicializarVariables();
        this.Model.nombre = pokemon.name;
        this.Model.tipo = pokemon.types[0].type.name;
        
        if(pokemon.moves.length==1){
           this.movimientos[0] = pokemon.moves[0];
        }
        else{
          this.movimientos[0] = pokemon.moves[0];
          this.movimientos[1] = pokemon.moves[1];
          this.movimientos[2] = pokemon.moves[2];
        }
       
        this.Model.imagenes = pokemon.sprites;
        
      }
    )
    
    console.log(this.Model);
      
      /*res => {
        console.log(this.pokemones);
        this.PokemonService.getPokemon()
        .subscribe((respk: any ) =>{ 
          respk.result.forEach(resultadi =>{
            this.PokemonService.getDataForName(resultadi.name).subscribe(
              (respu:any) =>{
                this.pokemones.push(respu);
                console.log(this.pokemones)
              }
            )
          })
        })
        console.log(this.pokemones);
      },
      err => {
        console.log(err);
      }
    );*/
  }
}

