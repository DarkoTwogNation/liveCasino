import { Component, OnInit } from '@angular/core';
// import { Wager } from 'src/app/core/models/entities/wager';

@Component({
  selector: 'app-user-account-wagers',
  templateUrl: './user-account-wagers.component.html',
  styleUrls: ['./user-account-wagers.component.scss']
})
export class UserAccountWagersComponent implements OnInit {
  public allSlots: any[] = [];
  public RGSSlots: any[] = [];

  constructor() {}

  ngOnInit() {
    this.loadSlots(false);
    this.loadSlots(true);
  }

  loadSlots(isRGS: boolean): void {
    if (isRGS) {
      this.RGSSlots.push({
        description: 'Shamrock Spin',
        myWinnings: -1600,
        wagerDate: new Date(),
        isRGSSlot: false
      });
    } else {
      this.allSlots.push({
        description: 'Shamrock Spin',
        myWinnings: -1420,
        wagerDate: new Date(),
        isRGSSlot: true
      });
    }
  }
}
