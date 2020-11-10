import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.scss']
})
export class UserChangePasswordComponent implements OnInit {
  changePassForm: FormGroup;
  changePassData = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  };
  passValue: string;

  constructor() { }

  ngOnInit() {
    this.changePassForm = new FormGroup({
      'oldPassword': new FormControl(this.changePassData.oldPassword, [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,}$/)
      ]),
      'newPassword': new FormControl(this.changePassData.newPassword, [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,}$/)
      ]),
      'confirmPassword': new FormControl(this.changePassData.confirmPassword, [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,}$/)
      ]),
    });

    this.changePassForm.valueChanges.subscribe(fData => this.passValue = fData.newPassword);
  }

  noPasswordMatch() {
    return this.changePassForm.valid && this.newPassword.value !== this.confirmPassword.value;
  }

  passwordIsSame() {
    return this.changePassForm.valid && this.newPassword.value === this.oldPassword.value;
  }

  get oldPassword() { return this.changePassForm.get('oldPassword'); }
  get newPassword() { return this.changePassForm.get('newPassword'); }
  get confirmPassword() { return this.changePassForm.get('confirmPassword'); }

  onUpdatePassword() {
    console.log(this.changePassForm.value)
  }
}
