import { Component, Input } from '@angular/core';
import { Contact } from './contact';

import { ContactService }      from './contact.service';

@Component({
  moduleId: module.id,
  selector: 'my-contact',
  templateUrl: 'contact.component.html',
  styleUrls: [ 
  		'contact.component.css'
  ]
})

export class ContactComponent {
  @Input()
  contact: Contact = new Contact;
  
  constructor(private contactService: ContactService){}
   
  ngOnInit(): void {
    
  }
  
  addContact(): void {
    if (!this.contact.name) { return; }
    if (!this.contact.email) { return; }
    if (!this.contact.title) { return; }
    if (!this.contact.message) { return; }
    this.contactService.addContact(this.contact).then(contact => {
      this.contact = new Contact;
    });
  }
}
