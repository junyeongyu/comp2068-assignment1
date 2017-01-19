import { Component } from '@angular/core';
@Component({
  selector: 'my-header',
  template: `
    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top topnav" role="navigation">
        <div class="container topnav">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand topnav" routerLink="" routerLinkActive="active" fragment="land">Junyeong's Portfolio</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a routerLink="" routerLinkActive="active" fragment="about">About Me</a>
                    </li>
                    <li>
                        <a routerLink="" routerLinkActive="active" fragment="projects">Projects</a>
                    </li>
                    <li>
                        <a routerLink="" routerLinkActive="active" fragment="services">Services</a>
                    </li>
                    <li>
                        <a routerLink="/contact" routerLinkActive="active">Contact Me</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
`
})
export class HeaderComponent {
}