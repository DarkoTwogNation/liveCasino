import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-account-marketing-preferences',
  templateUrl: './user-account-marketing-preferences.component.html',
  styleUrls: ['./user-account-marketing-preferences.component.scss']
})
export class UserAccountMarketingPreferencesComponent implements OnInit {
  public marketingForm: FormGroup;
  public marketingOptions = { deliverEmail: false, deliverHome: false, deliverPhone: false, deliverSms: false };

  constructor( private router : Router ) { }

  ngOnInit() {
    this.marketingForm = new FormGroup({
      'deliverEmail': new FormControl(this.marketingOptions.deliverEmail, []),
      'deliverHome': new FormControl(this.marketingOptions.deliverHome, []),
      'deliverPhone': new FormControl(this.marketingOptions.deliverPhone, []),
      'deliverSms': new FormControl(this.marketingOptions.deliverSms, [])
    });
  }

  onSubmit() {
      console.log(this.marketingForm.value);
      // TODO MARKETING SERVICE --submit--
  }

  get deliverEmail() { return this.marketingForm.get('deliverEmail'); }

  get deliverHome() { return this.marketingForm.get('deliverHome'); }

  get deliverPhone() { return this.marketingForm.get('deliverPhone'); }

  get deliverSms() { return this.marketingForm.get('deliverSms'); }

}
