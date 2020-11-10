import { Component, OnInit } from '@angular/core';
// import { AccountHistory } from 'src/app/core/models/entities/accountHistory';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-user-account-history',
  templateUrl: './user-account-history.component.html',
  styleUrls: ['./user-account-history.component.scss']
})
export class UserAccountHistoryComponent implements OnInit {

  public accountHistory: any[] = [];
  public activePage = 1;
  public filter = '';
  public maxSize = 5;
  public directionLinks = true;
  public autoHide = true;
  public responsive = false;
  public previewOnly = true;
  public config: PaginationInstance;


  constructor() {}

  ngOnInit() {
    this.loadAccountHistory();
    this.config =  {
      id: 'advanced',
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.accountHistory ? this.accountHistory.length : 10
    };
  }

  loadAccountHistory(): void {
    this.accountHistory = [
      {
        date: new Date(),
        referenceNumber: 6554179952655204352,
        description: 'Promotional Funds - Promotional Credit',
        amount: 500
      },
      {
        date: new Date(),
        referenceNumber: 6554179952655204352,
        description: 'Promotional Funds - Promotional Credit',
        amount: 600
      },
      {
        date: new Date(),
        referenceNumber: 6554179952655204352,
        description: 'Promotional Funds - Promotional Credit',
        amount: 700
      },
      {
        date: new Date(),
        referenceNumber: 6554179952655204352,
        description: 'Promotional Funds - Promotional Credit',
        amount: 800
      },
      {
        date: new Date(),
        referenceNumber: 6554179952655204352,
        description: 'Promotional Funds - Promotional Credit',
        amount: 500
      },
      {
        date: new Date(),
        referenceNumber: 6554179952655204352,
        description: 'Promotional Funds - Promotional Credit',
        amount: 600
      },
      {
        date: new Date(),
        referenceNumber: 6554179952655204352,
        description: 'Promotional Funds - Promotional Credit',
        amount: 700
      },
      {
        date: new Date(),
        referenceNumber: 6554179952655204352,
        description: 'Promotional Funds - Promotional Credit',
        amount: 800
      },
      {
        date: new Date(),
        referenceNumber: 6554179952655204352,
        description: 'Promotional Funds - Promotional Credit',
        amount: 500
      },
      {
        date: new Date(),
        referenceNumber: 6554179952655204352,
        description: 'Promotional Funds - Promotional Credit',
        amount: 600
      },
      {
        date: new Date(),
        referenceNumber: 6554179952655204352,
        description: 'Promotional Funds - Promotional Credit',
        amount: 700
      },
      {
        date: new Date(),
        referenceNumber: 6554179952655204352,
        description: 'Promotional Funds - Promotional Credit',
        amount: 800
      },
      {
        date: new Date(),
        referenceNumber: 6554179952655204352,
        description: 'Promotional Funds - Promotional Credit',
        amount: 500
      },
      {
        date: new Date(),
        referenceNumber: 6554179952655204352,
        description: 'Promotional Funds - Promotional Credit',
        amount: 600
      },
      {
        date: new Date(),
        referenceNumber: 6554179952655204352,
        description: 'Promotional Funds - Promotional Credit',
        amount: 700
      },
      {
        date: new Date(),
        referenceNumber: 6554179952655204352,
        description: 'Promotional Funds - Promotional Credit',
        amount: 800
      },
      {
        date: new Date(),
        referenceNumber: 6554179952655204352,
        description: 'Promotional Funds - Promotional Credit',
        amount: 500
      },
      {
        date: new Date(),
        referenceNumber: 6554179952655204352,
        description: 'Promotional Funds - Promotional Credit',
        amount: 600
      },
      {
        date: new Date(),
        referenceNumber: 6554179952655204352,
        description: 'Promotional Funds - Promotional Credit',
        amount: 700
      },
      {
        date: new Date(),
        referenceNumber: 6554179952655204352,
        description: 'Promotional Funds - Promotional Credit',
        amount: 800
      }
    ];
  }

  pageChanged(e: number) {
    this.config.currentPage = e;
  }
}
