import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { HeaderComponent }      from './include/header.component';
import { FooterComponent }      from './include/footer.component';

import { AppComponent }        from './app.component';
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
    HomeComponent,
    ContactComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
