import { Component, OnInit } from '@angular/core';

// import { Game } from 'src/app/core/models/entities/game';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  public tables: any[] = [];

  constructor() { }

  ngOnInit() {
    this.loadTables();
  }

  loadTables(): void {
    this.tables.push(
    {
      name: 'JUNGLE TREASURE',
      routeLink: 'jungle-treasure',
      image: 'assets/img/tables-game_1.jpg'
    },
    {
      name: 'TROPICAL VACATION',
      routeLink: 'tropical-vacation',
      image: 'assets/img/tables-game_2.jpg'
    },
    {
      name: 'PRO BLACK JACK',
      routeLink: 'pro-black-jack',
      image: 'assets/img/tables-game_3.jpg'
    },
    {
      name: 'ROULETTE ROYALE',
      routeLink: 'roulette-royale',
      image: 'assets/img/tables-game_4.jpg'
    },
    {
      name: 'JACKPOT ROULETTE',
      routeLink: 'jackpot-roulette',
      image: 'assets/img/tables-game_5.jpg'
    },
    {
      name: 'EZBACCARAT',
      routeLink: 'ezbaccarat',
      image: 'assets/img/tables-game_6.jpg'
    },
    {
      name: 'JACKS OR BETTER',
      routeLink: 'jacks-or-better',
      image: 'assets/img/tables-game_7.jpg'
    },
    {
      name: 'JESTER POKER',
      routeLink: 'jester-poker',
      image: 'assets/img/tables-game_8.jpg'
    },
    {
      name: 'DOUBLE2X REGALE POKER',
      routeLink: 'double2x-regale-poker',
      image: 'assets/img/tables-game_9.jpg'
    },
    {
      name: 'REGAL POKER',
      routeLink: 'regal-poker',
      image: 'assets/img/tables-game_10.jpg'
    },
    {
      name: 'EMPIRE ACTION',
      routeLink: 'empire-action',
      image: 'assets/img/tables-game_11.jpg'
    },
    {
      name: 'FIRE BALL ACTION',
      routeLink: 'fire-ball-action',
      image: 'assets/img/tables-game_12.jpg'
    },
    {
      name: 'MEGABALL ACTION',
      routeLink: 'megaball-action',
      image: 'assets/img/tables-game_13.jpg'
    },
    {
      name: 'HILO SOLITAIRE',
      routeLink: 'hilo-solitaire',
      image: 'assets/img/tables-game_14.jpg'
    },
    {
      name: 'FORTUNE 52',
      routeLink: 'fortune-52',
      image: 'assets/img/tables-game_15.jpg'
    },
    {
      name: 'SHAMROCK SPIN',
      routeLink: 'shamrock-spin',
      image: 'assets/img/tables-game_16.jpg'
    });
  }
}
