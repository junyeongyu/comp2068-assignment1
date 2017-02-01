import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
   <my-header></my-header>
   <router-outlet></router-outlet>
   <my-footer></my-footer>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {

  constructor(private route: ActivatedRoute) { }

  ngAfterViewChecked() {
    this.route.fragment.subscribe(f => {
      if (f == false) {
      	return;
      }
      const element = document.querySelector("#" + f)
      if (element) {
        element.scrollIntoView(element);
      }
    });
  }
  
}