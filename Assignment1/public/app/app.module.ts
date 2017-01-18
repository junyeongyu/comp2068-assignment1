import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { HeaderComponent }      from './include/header.component';
import { FooterComponent }      from './include/footer.component';

import { AppComponent }        from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroesComponent }     from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService }         from './hero.service';
import { HomeComponent }       from './home.component';
import { ContactComponent }    from './contact.component';

@NgModule({
  imports:      [ 
    BrowserModule ,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HomeComponent,
    ContactComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
