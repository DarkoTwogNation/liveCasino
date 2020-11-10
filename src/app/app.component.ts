import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './core/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'live-casino';

  constructor (public authService: AuthenticationService, public route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    if(this.authService.isLoggedIn) {
      this.authService.setCurrentUser()
    }
    this.router.navigate([{outlets: {modal: null}}]);
  }
}
