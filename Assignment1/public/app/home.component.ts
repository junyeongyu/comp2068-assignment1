import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-home',
  templateUrl: 'home.component.html',
  styleUrls: [ 
  		'land.component.css',
  		'about.component.css', 
  		'projects.component.css',
  		'services.component.css'
  ]
})

export class HomeComponent {

  ngOnInit(): void {

  }
}
