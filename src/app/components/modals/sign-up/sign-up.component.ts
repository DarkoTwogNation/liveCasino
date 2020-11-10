import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserSignUp } from 'src/app/core/models';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public havePromoCode: boolean = false;
  public authForm: FormGroup;
  public authUser: any = { username: '', password: '', email: '', promocode: ''};
  public termsAndConditions: boolean = false;
  public passValue: string = '';

  constructor( private router : Router, private authenticationService: AuthenticationService ) { }

  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.authForm = new FormGroup({
      'username': new FormControl(this.authUser.username, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'email': new FormControl(this.authUser.email, [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl(this.authUser.password, [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,}$/)
      ]),
      'promocode': new FormControl(this.authUser.promocode, [
        Validators.minLength(4)
      ])
    });

    this.authForm.valueChanges.subscribe(fData => this.passValue = fData.password);
  }

  user: Object = {};

  onSignUp() {
      console.log(this.authForm.value);
      // this.router.navigate([{outlets: {modal: null}}]);
      // this.passEntry.emit(this.user);

      // // stop here if form is invalid
      if (this.authForm.invalid || !this.termsAndConditions) {
          return;
      }

      // this.loading = true;
      this.authenticationService.signup(this.username.value, this.password.value, this.email.value, this.promocode.value)
          .subscribe(
              data => {
                console.log(data);
                  this.router.navigate([{outlets: {modal: null}}]);
              },
              error => {
                console.log(error);
              });
  }

  get username() { return this.authForm.get('username'); }

  get password() { return this.authForm.get('password'); }

  get email() { return this.authForm.get('email'); }

  get promocode() { return this.authForm.get('promocode'); }

  closeMe() {
    this.router.navigate([{outlets: {modal: null}}]);
  }

  signUpNow() {
    this.router.navigate([{outlets: {modal: 'signup'}}]);
  }

  forgotPassword() {
    this.router.navigate([{outlets: {modal: 'forgot-password'}}]);
  }

  showPromoCode() {
    this.havePromoCode = true;
  }

  haveAccount () {
    this.router.navigate([{outlets: {modal: 'login'}}]);
  }
}
