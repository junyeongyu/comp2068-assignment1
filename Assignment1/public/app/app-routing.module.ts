import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HomeComponent }        from './home.component';
import { ContactComponent }     from './contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact',     component: ContactComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'heroes/detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}