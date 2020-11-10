import { Component, OnInit } from '@angular/core';

// import { WinnerModel } from 'src/app/core/models/entities/winner';

@Component({
  selector: 'app-home-latest-winners',
  templateUrl: './home-latest-winners.component.html',
  styleUrls: ['./home-latest-winners.component.scss']
})
export class HomeLatestWinnersComponent implements OnInit {
  public latestWinners: any[] = [];

  constructor() {}

  ngOnInit() {
    this.loadWinners();
  }

  loadWinners(): void {
    this.latestWinners.push(
      {
        name: 'THOMAS J',
        game: 'Lighting Master',
        cashPrizes: 10725
      },
      {
        name: 'BATROCOIN',
        game: 'Forest Of The Fire',
        cashPrizes: 29400
      },
      {
        name: 'THOMAS J',
        game: 'Lighting Master',
        cashPrizes: 10725
      },
      {
        name: 'BATROCOIN',
        game: 'Forest Of The Fire',
        cashPrizes: 29400
      }
    );
  }
}
