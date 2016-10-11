import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import {CardsComponent} from './cards/cards.component';
import {LoginComponent} from './login/login.component';
import {NewDeckComponent} from './decks/new-deck.component';
import {CardsService} from './cards/cards.service';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';

@NgModule({
  imports: [ BrowserModule,routing,HttpModule,FormsModule],
  providers:[CardsService],
  declarations: [ AppComponent,LoginComponent,CardsComponent,NewDeckComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
