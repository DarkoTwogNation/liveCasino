import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/core/http';
import { FormGroup, Validators, FormControl } from '@angular/forms';

export interface UserAuth {
  username: string;
  password: string;
  rememberme: boolean;
}

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  authForm: FormGroup;
  authUser: UserAuth = { username: '', password: '', rememberme: false};
  returnUrl: string;

  constructor( 
    private route: ActivatedRoute,
    private router : Router,
    private authenticationService: AuthenticationService ) { }

  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.authForm = new FormGroup({
      'username': new FormControl(this.authUser.username, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'password': new FormControl(this.authUser.password, [
        Validators.required
      ]),
      'rememberme': new FormControl(this.authUser.rememberme)
    });
    //Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,}$/)
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  user: Object = {};

  onLogin() {
      console.log(this.authForm.value);
      // this.router.navigate([{outlets: {modal: null}}]);
      // this.passEntry.emit(this.user);

      // // stop here if form is invalid
      if (this.authForm.invalid) {
          return;
      }

      // this.loading = true;
      this.authenticationService.login(this.username.value, this.password.value)
          .subscribe(
              data => {
                  this.router.navigate([{outlets: {modal: null}}]);
                  this.router.navigateByUrl(this.returnUrl);
              },
              error => {
                  
              });
  }

  get username() { return this.authForm.get('username'); }

  get password() { return this.authForm.get('password'); }

  get rememberme() { return this.authForm.get('rememberme'); }

  closeMe() {
    this.router.navigate([{outlets: {modal: null}}]);
  }

  signUpNow() {
    this.router.navigate([{outlets: {modal: 'signup'}}]);
  }

  forgotPassword() {
    this.router.navigate([{outlets: {modal: 'forgot-password'}}]);
  }
}
