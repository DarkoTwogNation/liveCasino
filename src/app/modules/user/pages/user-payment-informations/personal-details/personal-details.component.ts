import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AccountProfile, TitleEnum } from 'src/app/core/models/entities/profile';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  @Input() personalizeAccount: AccountProfile;
  personalizeForm: FormGroup;

  // personalizeAccount: AccountProfile = {
  //   title: TitleEnum.NONE,
  //   firstName: '',
  //   lastName: '',
  //   dateOfBirth: {
  //     day: 1,
  //     month: 1,
  //     year: 2000
  //   }
  // };

  public titleEnums = [
    { key: 'MR', value: "Mr."},
    { key: 'MRS', value: "Mrs." },
    { key: 'MX', value: "Mx."},
    { key: 'MS', value: "Ms." },
    { key: 'MISS', value: "Miss"},
    { key: 'MASTER', value: "Master" },
    { key: 'MAID', value: "Maid" },
    { key: 'MADAM', value: "Madam" }
  ];

  constructor() { }

  ngOnInit() {

    console.log(this.personalizeAccount.title);

    this.personalizeForm = new FormGroup({
      'title': new FormControl(this.personalizeAccount.title, [
        Validators.required
      ]),
      'firstName': new FormControl(this.personalizeAccount.firstName, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'lastName': new FormControl(this.personalizeAccount.lastName, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'day': new FormControl(this.personalizeAccount.dateOfBirth.day, [
        Validators.required,
        Validators.pattern(/^[0-9]{1,2}$/),
        Validators.min(1),
        Validators.max(31)
      ]),
      'month': new FormControl(this.personalizeAccount.dateOfBirth.month, [
        Validators.required,
        Validators.pattern(/^[0-9]{1,2}$/),
        Validators.min(1),
        Validators.max(12)
      ]),
      'year': new FormControl(this.personalizeAccount.dateOfBirth.year, [
        Validators.required,
        Validators.pattern(/^[0-9]{4}$/),
        Validators.min(1900),
        Validators.max(2001)
      ]),
    });
  }

  get title() { return this.personalizeForm.get('title'); }
  get firstName() { return this.personalizeForm.get('firstName'); }
  get lastName() { return this.personalizeForm.get('lastName'); }
  get day() { return this.personalizeForm.get('day'); }
  get month() { return this.personalizeForm.get('month'); }
  get year() { return this.personalizeForm.get('year'); }

  onPersonalDetails() {
    console.log(this.personalizeForm.value);
    this.passEntry.emit(this.personalizeForm.value);
  }
  
}
