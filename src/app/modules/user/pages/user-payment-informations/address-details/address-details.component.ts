import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CreditCard } from 'src/app/core/models/entities/card';
// import { AddressDetails } from 'src/app/core/models/entities/address';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  @Input() addressDetails: any;
  addressDetailsForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.addressDetailsForm = new FormGroup({
      'address1': new FormControl(this.addressDetails.address1, [
        Validators.required
      ]),
      'address2': new FormControl(this.addressDetails.address2, [

      ]),
      'city': new FormControl(this.addressDetails.city, [
        Validators.required
      ]),
      'stateProvince': new FormControl(this.addressDetails.stateProvince, [
        Validators.required
      ]),
      'zipPostalCode': new FormControl(this.addressDetails.zipPostalCode, [
        Validators.required
      ]),
      'country': new FormControl(this.addressDetails.country, [
        Validators.required
      ]),
      'cellNumber': new FormControl(this.addressDetails.cellNumber, [
      ]),
      'phoneNumber': new FormControl(this.addressDetails.phoneNumber, [
      ]),
      'promoCode': new FormControl(this.addressDetails.promoCode, [
      ]),
      'sendHome': new FormControl(this.addressDetails.sendHome, [
      ]),
      'sendEmail': new FormControl(this.addressDetails.sendEmail, [
      ]),
      'sendSms': new FormControl(this.addressDetails.sendSms, [
      ]),
    });
  }

  get address1() { return this.addressDetailsForm.get('address1'); }
  get address2() { return this.addressDetailsForm.get('address2'); }
  get city() { return this.addressDetailsForm.get('city'); }
  get stateProvince() { return this.addressDetailsForm.get('stateProvince'); }
  get zipPostalCode() { return this.addressDetailsForm.get('zipPostalCode'); }
  get country() { return this.addressDetailsForm.get('country'); }
  get cellNumber() { return this.addressDetailsForm.get('cellNumber'); }
  get phoneNumber() { return this.addressDetailsForm.get('phoneNumber'); }
  get promoCode() { return this.addressDetailsForm.get('promoCode'); }
  get sendHome() { return this.addressDetailsForm.get('sendHome'); }
  get sendEmail() { return this.addressDetailsForm.get('sendEmail'); }
  get sendSms() { return this.addressDetailsForm.get('sendSms'); }

  onAddressDetailsUpdate() {
    console.log(this.addressDetailsForm.value);
    this.passEntry.emit(this.addressDetailsForm.value);
  }

  stepBack() {
    this.passEntry.emit();
  }
}
