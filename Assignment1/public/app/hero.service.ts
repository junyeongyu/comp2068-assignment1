import { Injectable }     from '@angular/core';
import { Http }           from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  
  private headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(private http: Http) { }
  
  getHeroes(): Promise<Hero[]> {
    return this.http.get('heroes/list')
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
    return this.http.get('heroes/detail/' + id)
        .toPromise()
        .then(res => res.json() as Hero)
        .catch(this.handleError);
  }
  
  addHero(name: string): Promise<Hero> {
    return this.http
      .post('heroes/save/', {name: name}, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Hero)
      .catch(this.handleError);
  }
  
  updateHero(hero: Hero): Promise<Hero> {
    return this.http
        .put('heroes/save/' + hero.id, hero, {headers: this.headers})
        .toPromise()
        .then(() => hero)
        .catch(this.handleError);
  }
  
  deleteHero(id: number): Promise<void> {
    return this.http.delete('heroes/delete/' + id, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}