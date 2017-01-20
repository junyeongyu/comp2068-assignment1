import { Injectable }       from '@angular/core';
import { Http, Headers }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contact } from './contact';

@Injectable()
export class ContactService {
  
  private headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(private http: Http) { }
  
  addContact(contact: Contact): Promise<Contact> {
    return this.http
      .post('contact/save/', contact, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Contact)
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}