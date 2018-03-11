import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SearchBox} from './search-box/search-box.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBox
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
