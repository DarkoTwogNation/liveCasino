import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/http';
import { first } from 'rxjs/operators';
import { FormGroup, Validators, FormControl } from '@angular/forms';

// import { Promotion } from 'src/app/core/models/entities/promotion';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {
  public allPromotions: any[] = [];
  public codeSubmit: FormGroup;
  public codeModel = { promocode: '' };

  constructor() { }

  ngOnInit() {
    this.codeSubmit = new FormGroup({
      'promocode': new FormControl(this.codeModel.promocode, [
        Validators.required,
        Validators.minLength(8)
      ])
    });

    this.loadPromotions();
  }

  get promocode() { return this.codeSubmit.get('promocode'); }

  public onCodeSubmit() {
    console.log(this.codeSubmit.value)
  }

  public loadPromotions() {
    this.allPromotions = [
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
  }

}
