import { Component, OnInit } from '@angular/core';

// import { LoyaltyLounge } from 'src/app/core/models/entities/loyaltyLounge';

@Component({
  selector: 'app-lounge',
  templateUrl: './lounge.component.html',
  styleUrls: ['./lounge.component.scss']
})
export class LoungeComponent implements OnInit {

  public loyaltyLounge: any[] = [];

  constructor() {}

  ngOnInit() {
    this.loadLoyaltyLounge();
  }

  loadLoyaltyLounge(): void {
    this.loyaltyLounge.push(
    {
      image: 'assets/img/VIP_GAME_Sign_Up_Rectangle.jpg',
      routeLink: '50-dolphins'
    },
    {
      image: 'assets/img/VIP_GAME_Sign_Up_Rectangle_2.jpg',
      routeLink: 'mustang-money'
    },
    {
      image: 'assets/img/VIP_GAME_Sign_Up_Rectangle_3.jpg',
      routeLink: 'leonidas'
    },
    {
      image: 'assets/img/VIP_GAME_Sign_Up_Rectangle_4.jpg',
      routeLink: 'dragon-pay'
    },
    {
      image: 'assets/img/VIP_GAME_Sign_Up_Rectangle_5.jpg',
      routeLink: 'mystical-tarot'
    }
    );
  }

}
