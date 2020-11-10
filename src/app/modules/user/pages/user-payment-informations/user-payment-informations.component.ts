import { Component, OnInit } from '@angular/core';
import { AccountProfile, TitleEnum } from 'src/app/core/models/entities/profile';
import { CreditCard, CreditCardTypes } from 'src/app/core/models/entities/card';
import { CardDetailsComponent } from './card-details/card-details.component';
// import { AddressDetails } from 'src/app/core/models/entities/address';

@Component({
  selector: 'app-user-payment-informations',
  templateUrl: './user-payment-informations.component.html',
  styleUrls: ['./user-payment-informations.component.scss']
})
export class UserPaymentInformationsComponent implements OnInit {

  public stepProv: number = 1;
  public personalInformation: AccountProfile = {
    title: TitleEnum.NONE,
    firstName: '',
    lastName: '',
    dateOfBirth: {
      day: 1,
      month: 1,
      year: 2000
    }
  };
  public cardDetailsData: CreditCard = {
    type: CreditCardTypes.VISA,
    nameOnCard: '',
    cardNumber: null, //4085660893496944
    expMonth: null,
    expYear: null,
    cv23: '',
    nickname: ''
  }

  public addressDetailsData: any = {
    address1: '',
    address2: '',
    city: '',
    stateProvince: '',
    zipPostalCode: '',
    country: '',
    cellNumber: '',
    phoneNumber: '',
    promoCode: '',
    sendHome: false,
    sendEmail: false,
    sendSms: false
  }

  constructor() { }

  ngOnInit() {
  }

  public setPersonalDetails(AccountInfo: AccountProfile) {
    this.personalInformation = AccountInfo;
    this.stepProv = 2;
  }

  public setCardDetails(CardDetails?: CreditCard) {
    // this.personalInformation = AccountInfo;
    if (!CardDetails) {
      this.stepProv = 1;
    } else {
      this.cardDetailsData = CardDetails;
      this.stepProv = 3;
    }
  }

  public setAddressDetails(AddressDetails?: any) {
    // this.personalInformation = AccountInfo;
    if (!AddressDetails) {
      this.stepProv = 2;
    } else {
      this.addressDetailsData = AddressDetails;
    }
  }
}
