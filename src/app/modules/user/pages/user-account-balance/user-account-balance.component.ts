import { Component, OnInit } from '@angular/core';
// import { AccountBalance } from 'src/app/core/models/entities/accountBalance';

@Component({
  selector: 'app-user-account-balance',
  templateUrl: './user-account-balance.component.html',
  styleUrls: ['./user-account-balance.component.scss']
})
export class UserAccountBalanceComponent implements OnInit {

  public userAccountBalance: any;

  constructor() { }

  ngOnInit() {
    this.loadUserAccountBalance();
  }

  loadUserAccountBalance(): void {
    this.userAccountBalance = {
      availableBalance: 23246,
      creditInPlay: 0,
      totalVirtualCredit: 23246
    };
  }

}


