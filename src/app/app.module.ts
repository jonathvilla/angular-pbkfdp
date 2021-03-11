import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { UploadBetsComponent } from "./upload-bets/upload-bets.component";
import { from } from "rxjs";
@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, UploadBetsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
