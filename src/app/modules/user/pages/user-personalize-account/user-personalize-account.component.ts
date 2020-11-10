import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AccountProfile, TitleEnum } from 'src/app/core/models/entities/profile';
import { AuthenticationService } from 'src/app/core/http';

@Component({
  selector: 'app-user-personalize-account',
  templateUrl: './user-personalize-account.component.html',
  styleUrls: ['./user-personalize-account.component.scss']
})
export class UserPersonalizeAccountComponent implements OnInit {
  personalizeForm: FormGroup;
  personalizeAccount: AccountProfile = {
    title: TitleEnum.NONE,
    firstName: '',
    lastName: '',
    dateOfBirth: {
      day: 1,
      month: 1,
      year: 2000
    }
  };

  public titleEnums = [
    { key: 'MR', value: 'Mr.'},
    { key: 'MRS', value: 'Mrs.' },
    { key: 'MX', value: 'Mx.'},
    { key: 'MS', value: 'Ms.' },
    { key: 'MISS', value: 'Miss'},
    { key: 'MASTER', value: 'Master' },
    { key: 'MAID', value: 'Maid' },
    { key: 'MADAM', value: 'Madam' }
  ];

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {

    this.authService.clientData.subscribe(data => {
      // this.personalizeAccount.title = data.title;
      this.personalizeAccount.firstName = data.firstName;
      this.personalizeAccount.lastName = data.lastName;
    });

    console.log(this.personalizeAccount.title);

    this.personalizeForm = new FormGroup({
      title: new FormControl(this.personalizeAccount.title, [
        Validators.required
      ]),
      firstName: new FormControl(this.personalizeAccount.firstName, [
        Validators.compose([Validators.required,  Validators.minLength(4)])
      ]),
      lastName: new FormControl(this.personalizeAccount.lastName, [
        Validators.compose([Validators.required,  Validators.minLength(4)])
      ]),
      day: new FormControl(this.personalizeAccount.dateOfBirth.day, [
        Validators.compose([Validators.pattern(/^[0-9]{1,2}$/), Validators.min(1), Validators.max(31)])

      ]),
      month: new FormControl(this.personalizeAccount.dateOfBirth.month, [
        Validators.compose([ Validators.required, Validators.pattern(/^[0-9]{1,2}$/), Validators.min(1), Validators.max(12)])
      ]),
      year: new FormControl(this.personalizeAccount.dateOfBirth.year, [
        Validators.compose([Validators.required, Validators.pattern(/^[0-9]{4}$/), Validators.min(1900), Validators.max(2001)])
      ]),
    });
  }

  get title() { return this.personalizeForm.get('title'); }
  get firstName() { return this.personalizeForm.get('firstName'); }
  get lastName() { return this.personalizeForm.get('lastName'); }
  get day() { return this.personalizeForm.get('day'); }
  get month() { return this.personalizeForm.get('month'); }
  get year() { return this.personalizeForm.get('year'); }

  onUpdateAccount() {
    console.log(this.personalizeForm.value);
  }
}
