import { Component, OnInit } from '@angular/core';

// import { Game } from 'src/app/core/models/entities/game';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss']
})
export class SlotsComponent implements OnInit {

  public allSlots: any[] = [];
  public filterArgs = {};
  public filterGroup = "all";

  constructor() { }

  ngOnInit() {
    this.loadTables();
  }

  filterSlots (arg: string) {
    if (arg === "all") {
      this.filterArgs = {};
    } else if (arg === "new") {
      this.filterArgs = {
        isNewGame: true
      }
    } else if (arg !== "new") {
      this.filterArgs = {
        lineNumbers: arg
      }
    }
    this.filterGroup = arg;
  }

  loadTables(): void {
    this.allSlots.push(
    {
      name: 'JUNGLE TREASURE',
      routeLink: 'jungle-treasure',
      image: 'assets/img/tables-game_1.jpg',
      isNewGame: true,
      lineNumbers: 20
    },
    {
      name: 'TROPICAL VACATION',
      routeLink: 'tropical-vacation',
      image: 'assets/img/tables-game_2.jpg',
      lineNumbers: 15
    },
    {
      name: 'PRO BLACK JACK',
      routeLink: 'pro-black-jack',
      image: 'assets/img/tables-game_3.jpg',
      lineNumbers: 10,
      isVipGame: true
    },
    {
      name: 'ROULETTE ROYALE',
      routeLink: 'roulette-royale',
      image: 'assets/img/tables-game_4.jpg',
      lineNumbers: 5
    },
    {
      name: 'JACKPOT ROULETTE',
      routeLink: 'jackpot-roulette',
      image: 'assets/img/tables-game_5.jpg',
      isNewGame: true,
      lineNumbers: 3
    },
    {
      name: 'EZBACCARAT',
      routeLink: 'ezbaccarat',
      image: 'assets/img/tables-game_6.jpg',
      lineNumbers: 9
    },
    {
      name: 'JACKS OR BETTER',
      routeLink: 'jacks-or-better',
      image: 'assets/img/tables-game_7.jpg',
      lineNumbers: 12,
      isVipGame: true
    },
    {
      name: 'JESTER POKER',
      routeLink: 'jester-poker',
      image: 'assets/img/tables-game_8.jpg',
      lineNumbers: 18
    },
    {
      name: 'DOUBLE2X REGALE POKER',
      routeLink: 'double2x-regale-poker',
      image: 'assets/img/tables-game_9.jpg',
      isNewGame: true,
      lineNumbers: 11
    },
    {
      name: 'REGAL POKER',
      routeLink: 'regal-poker',
      image: 'assets/img/tables-game_10.jpg',
      lineNumbers: 2
    },
    {
      name: 'EMPIRE ACTION',
      routeLink: 'empire-action',
      image: 'assets/img/tables-game_11.jpg',
      lineNumbers: 17
    },
    {
      name: 'FIRE BALL ACTION',
      routeLink: 'fire-ball-action',
      image: 'assets/img/tables-game_12.jpg',
      lineNumbers: 7
    },
    {
      name: 'MEGABALL ACTION',
      routeLink: 'megaball-action',
      image: 'assets/img/tables-game_13.jpg',
      lineNumbers: 13
    },
    {
      name: 'HILO SOLITAIRE',
      routeLink: 'hilo-solitaire',
      image: 'assets/img/tables-game_14.jpg',
      lineNumbers: 6,
      isVipGame: true
    },
    {
      name: 'FORTUNE 52',
      routeLink: 'fortune-52',
      image: 'assets/img/tables-game_15.jpg',
      lineNumbers: 16
    },
    {
      name: 'SHAMROCK SPIN',
      routeLink: 'shamrock-spin',
      image: 'assets/img/tables-game_16.jpg',
      lineNumbers: 12,
      isVipGame: true
    });
  }

}
