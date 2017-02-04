"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var contact_1 = require('./contact');
var contact_service_1 = require('./contact.service');
var ContactComponent = (function () {
    function ContactComponent(contactService) {
        this.contactService = contactService;
        this.contact = new contact_1.Contact;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.addContact = function () {
        var _this = this;
        if (!this.contact.name) {
            alert('Please input your name');
            return;
        }
        if (!this.contact.email) {
            alert('Please input your email');
            return;
        }
        if (!this.contact.title) {
            alert('Please input the title');
            return;
        }
        if (!this.contact.message) {
            alert('Please input the message.');
            return;
        }
        this.contactService.addContact(this.contact).then(function (contact) {
            if (contact) {
                alert('The message is successfully sent');
                _this.contact = new contact_1.Contact;
            }
        }).catch(function (error) {
            if (error.ok === false) {
                alert('Sorry, there is internal problem.');
            }
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', contact_1.Contact)
    ], ContactComponent.prototype, "contact", void 0);
    ContactComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-contact',
            templateUrl: 'contact.component.html',
            styleUrls: [
                'contact.component.css'
            ]
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
