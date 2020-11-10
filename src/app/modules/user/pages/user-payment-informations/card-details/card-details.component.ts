import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CreditCard } from 'src/app/core/models/entities/card';
import { creditCardValidator } from 'src/app/_helpers/credit-card-validatior';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  @Input() creditCard: CreditCard;
  creditCardForm: FormGroup;

  public monthsList = [1,2,3,4,5,6,7,8,9,10,11,12];
  currentYear = (new Date()).getFullYear();
  public yearsList: Array<number> = Array(10).fill(this.currentYear).map((v,idx) => this.currentYear+idx);
  
  public cardTypes = [
    'Visa', 'Amex', 'MasterCard', 'Discover'
  ];

  constructor() { }

  ngOnInit() {

    console.log(this.yearsList);
    this.creditCardForm = new FormGroup({
      'type': new FormControl(this.creditCard.type, [
        Validators.required
      ]),
      'nameOnCard': new FormControl(this.creditCard.nameOnCard, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'cardNumber': new FormControl(this.creditCard.cardNumber, [
        Validators.required
      ]),
      'expMonth': new FormControl(this.creditCard.expMonth, [
        Validators.required
      ]),
      'expYear': new FormControl(this.creditCard.expYear, [
        Validators.required
      ]),
      'cv23': new FormControl(this.creditCard.cv23, [
        Validators.required,
        Validators.pattern(/^[0-9]{3}$/)
      ]),
      'nickname': new FormControl(this.creditCard.nickname, [
        Validators.required,
        Validators.minLength(4)
      ]),
    }, {validators: creditCardValidator });
  }
  get type() { return this.creditCardForm.get('type'); }
  get nameOnCard() { return this.creditCardForm.get('nameOnCard'); }
  get cardNumber() { return this.creditCardForm.get('cardNumber'); }
  get expMonth() { return this.creditCardForm.get('expMonth'); }
  get expYear() { return this.creditCardForm.get('expYear'); }
  get cv23() { return this.creditCardForm.get('cv23'); }
  get nickname() { return this.creditCardForm.get('nickname'); }

  onCardDetailsUpdate() {
    console.log(this.creditCardForm.value);
    this.passEntry.emit(this.creditCardForm.value);
  }

  stepBack() {
    this.passEntry.emit();
  }
}
