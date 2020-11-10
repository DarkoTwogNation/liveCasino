import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { Promotion } from 'src/app/core/models/entities/promotion';

@Component({
  selector: 'app-promotions-preview',
  templateUrl: './promotions-preview.component.html',
  styleUrls: ['./promotions-preview.component.scss']
})
export class PromotionsPreviewComponent implements OnInit {
  public selectedPromotion: any;
  public allPromotions: any[] = [
    {
      name: 'LIVE! REWARDS POINTS',
      routeLink: 'live-rewards',
      image: 'assets/img/Tables_GAME_Rectangle_4.jpg',
      title: 'LIVE! REWARDS POINTS',
      description: `You can get valuable Live! Rewards Points every time you make a purchase at Live! Social Casino. You’ll receive 10% back as points for each and every purchase you make online!

      For example, if you purchase our $49.99 package, you’ll instantly receive 125,000 Virtual Credits to play our exciting online games, plus 12,500 Live! Rewards Points will be added to your Live! Rewards Card for you to use when you next visit Maryland Live! Casino.`
    },
    {
      name: 'DAILY LOGIN BONUS',
      routeLink: 'daily-login-bonus',
      image: 'assets/img/Tables_GAME_Rectangle_2.jpg',
      title: 'DAILY LOGIN BONUS',
      description: `Description missing.`
    },
    {
      name: '100% BONUS CREDITS',
      routeLink: '100-bonus-credits',
      image: 'assets/img/Tables_GAME_Rectangle_3.jpg',
      title: '100% BONUS CREDITS',
      description: `Description missing.`
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const promotionName = params.get('name');
      this.selectedPromotion = this.allPromotions.find(promotion => promotion.routeLink === promotionName);
    });
  }

}
