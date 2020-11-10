import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/http';
import { first } from 'rxjs/operators';
import { FormGroup, Validators, FormControl } from '@angular/forms';

export interface UserAuth {
  username: string;
  password: string;
  rememberme: boolean;
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPassword implements OnInit {
  authForm: FormGroup;
  authUser = { email: '' };
  constructor( private router : Router, private authenticationService: AuthenticationService ) { }

  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.authForm = new FormGroup({
      'email': new FormControl(this.authUser.email, [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  get email() { return this.authForm.get('email'); }

  onReset() {
      console.log(this.authForm.value);
      // this.router.navigate([{outlets: {modal: null}}]);
      // this.passEntry.emit(this.user);

        // // stop here if form is invalid
        if (this.authForm.invalid) {
            return;
        }

        // this.loading = true;
        this.authenticationService.resetPassword(this.email.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([{outlets: {modal: "login"}}]);
                },
                error => {
                    
                });
  }

  closeMe() {
    this.router.navigate([{outlets: {modal: null}}]);
  }

  signIn() {
    this.router.navigate([{outlets: {modal: 'login'}}]);
  }

  signUpNow() {
    this.router.navigate([{outlets: {modal: 'signup'}}]);
  }
}
