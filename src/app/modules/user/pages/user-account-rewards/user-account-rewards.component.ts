import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LiveRewardsCard, TitleEnum } from 'src/app/core/models/entities/profile';


@Component({
  selector: 'app-user-account-rewards',
  templateUrl: './user-account-rewards.component.html',
  styleUrls: ['./user-account-rewards.component.scss']
})
export class UserAccountRewardsComponent implements OnInit {
  liveRewardsForm: FormGroup;
  liveRewardsCard: LiveRewardsCard = {
    cardId: '',
    lastName: '',
    dateOfBirth: {
      day: 1,
      month: 1,
      year: 2000
    }
  };

  constructor() { }

  ngOnInit() {

    this.liveRewardsForm = new FormGroup({
      'cardId': new FormControl(this.liveRewardsCard.cardId, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[0-9]{0,}$/),
      ]),
      'lastName': new FormControl(this.liveRewardsCard.lastName, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'day': new FormControl(this.liveRewardsCard.dateOfBirth.day, [
        Validators.required,
        Validators.pattern(/^[0-9]{1,2}$/),
        Validators.min(1),
        Validators.max(31)
      ]),
      'month': new FormControl(this.liveRewardsCard.dateOfBirth.month, [
        Validators.required,
        Validators.pattern(/^[0-9]{1,2}$/),
        Validators.min(1),
        Validators.max(12)
      ]),
      'year': new FormControl(this.liveRewardsCard.dateOfBirth.year, [
        Validators.required,
        Validators.pattern(/^[0-9]{4}$/),
        Validators.min(1900),
        Validators.max(2001)
      ]),
    });
  }

  get cardId() { return this.liveRewardsForm.get('cardId'); }
  get lastName() { return this.liveRewardsForm.get('lastName'); }
  get day() { return this.liveRewardsForm.get('day'); }
  get month() { return this.liveRewardsForm.get('month'); }
  get year() { return this.liveRewardsForm.get('year'); }

  onLinkAccount() {
    console.log(this.liveRewardsForm.value)
  }
}
