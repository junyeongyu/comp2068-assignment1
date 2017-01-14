import { Injectable }     from '@angular/core';
import { Http }           from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  
  private heroesUrl = 'heroes/list';  // URL to web api
  
  constructor(private http: Http) { }
  
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json() as Hero[])
               .catch(this.handleError);
  }
  
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
  
  getHero(id: number): Promise<Hero> {
    //return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    const url = 'heroes/detail/' + id;
    return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Hero)
        .catch(this.handleError);
  }
}