import { Component, OnInit } from '@angular/core';

// import { Game } from 'src/app/core/models/entities/game';

@Component({
  selector: 'app-vip',
  templateUrl: './vip.component.html',
  styleUrls: ['./vip.component.scss']
})
export class VipComponent implements OnInit {

  public vipGames: any[] = [];

  constructor() {}

  ngOnInit() {
    this.loadVipGames();
  }

  loadVipGames(): void {
    // TODO: Load from backend
    this.vipGames.push(
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_2.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_3.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_2.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_4.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_2.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_3.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_4.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_3.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_2.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_3.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_2.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_4.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_4.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_3.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_2.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_4.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_4.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_3.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_4.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_2.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_4.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_3.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_4.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_2.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_4.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089.jpg',
        routeLink: 'shamrock-spin'
      },
      {
        name: 'SHAMROCK SPIN',
        image: 'assets/img/gametype.2089_3.jpg',
        routeLink: 'shamrock-spin'
      }
    );
  }

}
