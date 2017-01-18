import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
   <my-header></my-header>
   <router-outlet></router-outlet>
   <h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
     <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
   </nav>
   <my-footer></my-footer>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}