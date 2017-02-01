import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }        from './home.component';
import { ContactComponent }     from './contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: '', component: HomeComponent, hash:"#land"},
  { path: '', component: HomeComponent, hash:"#about"},
  { path: '', component: HomeComponent, hash:"#projects"},
  { path: '', component: HomeComponent, hash:"#services"},
  { path: 'contact',     component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}