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
var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'my-footer',
            template: "\n    <!-- Footer -->\n    <footer>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <ul class=\"list-inline\">\n                        <li>\n                            <a routerLink=\"\" routerLinkActive=\"active\" fragment=\"land\">Home</a>\n                        </li>\n                        <li class=\"footer-menu-divider\">&sdot;</li>\n                        <li>\n                            <a routerLink=\"\" routerLinkActive=\"active\" fragment=\"about\">About Me</a>\n                        </li>\n                        <li class=\"footer-menu-divider\">&sdot;</li>\n                        <li>\n                            <a routerLink=\"\" routerLinkActive=\"active\" fragment=\"projects\">Projects</a>\n                        </li>\n                        <li class=\"footer-menu-divider\">&sdot;</li>\n                        <li>\n                            <a routerLink=\"\" routerLinkActive=\"active\" fragment=\"services\">Services</a>\n                        </li>\n                        <li class=\"footer-menu-divider\">&sdot;</li>\n                        <li>\n                            <a routerLink=\"/contact\" routerLinkActive=\"active\">Contact Me</a>\n                        </li>\n                    </ul>\n                    <p class=\"copyright text-muted small\">Copyright &copy; Junyeong Yu 2017. All Rights Reserved</p>\n                </div>\n            </div>\n        </div>\n    </footer>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
