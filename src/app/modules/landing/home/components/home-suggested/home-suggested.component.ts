import { Component, OnInit } from '@angular/core';

// import { Game } from 'src/app/core/models/entities/game';

@Component({
  selector: 'app-home-suggested',
  templateUrl: './home-suggested.component.html',
  styleUrls: ['./home-suggested.component.scss']
})
export class HomeSuggestedComponent implements OnInit {
  public suggestedGames: any[] = [];

  constructor() {}

  ngOnInit() {
    this.loadSuggestedGames();
  }

  loadSuggestedGames(): void {
    // TODO: Load from backend
    this.suggestedGames.push(
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.1882.jpg',
        routeLink: 'shamrock-spin',
        isVipGame: false
      },
      {
        name: 'BLACK DIAMOND',
        image: 'assets/img/gametype.1882_2.jpg',
        routeLink: 'black-diamond',
        isVipGame: true
      },
      {
        name: 'DRAGONS LAW',
        image: 'assets/img/gametype.1882_3.jpg',
        routeLink: 'dragons-law',
        isVipGame: false
      },
      {
        name: 'THE GAMBLING BUG',
        image: 'assets/img/gametype.1882_4.jpg',
        routeLink: 'the-gambling-bug',
        isVipGame: false
      },
      {
        name: 'GREAT TIGER',
        image: 'assets/img/gametype.1882.jpg',
        routeLink: 'great-tiger',
        isVipGame: false
      },
      {
        name: 'GAMBLING 1',
        image: 'assets/img/gametype.1882.jpg',
        routeLink: 'gambling-1',
        isVipGame: true
      },
      {
        name: 'GAMBLING 2',
        image: 'assets/img/gametype.1882.jpg',
        routeLink: 'gambling-2',
        isVipGame: false
      },
      {
        name: 'GAMBLING 3',
        image: 'assets/img/gametype.1882.jpg',
        routeLink: 'gambling-3',
        isVipGame: true
      }
    );
  }
}
