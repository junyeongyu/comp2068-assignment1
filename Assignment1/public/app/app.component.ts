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
  title = 'Tour of Heroes';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(f => {
      if (f == false) {
      	return;
      }
      setTimeout(function () { // Fix: loading interval
	      const element = document.querySelector("#" + f)
	      if (element) {
	        element.scrollIntoView(element);
	      }
      }, 50);
    });
  }
  
}