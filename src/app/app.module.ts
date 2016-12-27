import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }        from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon/pokemon-details/pokemon-details.component';
import {PokemonService} from "./pokemon/pokemon.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    PokemonListComponent,
    PokemonDetailsComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
