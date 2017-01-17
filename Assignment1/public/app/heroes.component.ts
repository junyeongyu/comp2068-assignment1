import { Component } from '@angular/core';
import { Router }   from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id, /* Through moduleId, templateUrl and styleUrls are relative to the component */
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ]
})

export class HeroesComponent {
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(
    private heroService: HeroService,
    private router: Router
   ){}
  
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  ngOnInit(): void {
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  gotoDetail(): void {
    this.router.navigate(['/heroes/detail', this.selectedHero.id]);
  }
  
  addHero(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero(name).then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
  }
  
  deleteHero(hero: Hero): void {
    this.heroService.deleteHero(hero.id).then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
    });
  }
}