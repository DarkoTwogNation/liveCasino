import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-account-referal',
  templateUrl: './user-account-referral.component.html',
  styleUrls: ['./user-account-referral.component.scss']
})
export class UserAccountReferralComponent implements OnInit {
  referalForm: FormGroup;
  referalGroup = { email1: '', email2: '', email3: '', email4: '', email5: ''};

  constructor() { }

  ngOnInit() {
    this.referalForm = new FormGroup({
      'email1': new FormControl(this.referalGroup.email1, [
        Validators.minLength(4),
        Validators.email
      ]),
      'email2': new FormControl(this.referalGroup.email2, [
        Validators.minLength(4),
        Validators.email
      ]),
      'email3': new FormControl(this.referalGroup.email3, [
        Validators.minLength(4),
        Validators.email
      ]),
      'email4': new FormControl(this.referalGroup.email4, [
        Validators.minLength(4),
        Validators.email
      ]),
      'email5': new FormControl(this.referalGroup.email5, [
        Validators.minLength(4),
        Validators.email
      ])
    });
  }

  get email1() { return this.referalForm.get('email1'); }
  get email2() { return this.referalForm.get('email2'); }
  get email3() { return this.referalForm.get('email3'); }
  get email4() { return this.referalForm.get('email4'); }
  get email5() { return this.referalForm.get('email5'); }

  onSendReferals() {
    console.log(this.referalForm.value)
  }

  isFormInvalid() {
    if (this.referalForm.invalid) {
      return true;
    }

    if (!this.email1.value && !this.email2.value && !this.email3.value&& !this.email4.value&& !this.email5.value) {
      return true;
    }

    return false;
  }
}
