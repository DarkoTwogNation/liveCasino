import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/http';


@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GamePlayComponent implements OnInit {
    public clientBudget = 0;  
    public gameBlock;
    public selectedGame: any;
    public gamesList = [
      {
        routeLink: 'wheel-of-fortune',
        skygamesLink: 'wheel-of-fortune'
      },
      {
        routeLink: 'bingo',
        skygamesLink: 'bingo'
      },
      {
        routeLink: 'baccarat',
        skygamesLink: 'baccarat'
      },
      {
        routeLink: 'blackjack',
        skygamesLink: 'blackjack'
      },
      {
        routeLink: 'caribbean-stud-poker',
        skygamesLink: 'caribbean-stud-poker'
      },
      {
        routeLink: 'craps',
        skygamesLink: 'craps'
      },
      {
        routeLink: 'grayhound-racing',
        skygamesLink: 'grayhound-racing'
      },
      {
        routeLink: 'horse-racing',
        skygamesLink: 'horse-racing'
      },
      {
        routeLink: 'jack-or-better',
        skygamesLink: 'jack-or-better'
      },
      {
        routeLink: 'keno',
        skygamesLink: 'keno'
      },
      {
        routeLink: 'roulette-royale',
        skygamesLink: 'roulette-royale'
      },
      {
        routeLink: 'scratch-fruit',
        skygamesLink: 'scratch-fruit'
      },
      {
        routeLink: 'slot-arabian',
        skygamesLink: 'slot-arabian'
      },
      {
        routeLink: 'slot-ramses',
        skygamesLink: 'slot-ramses'
      },
      {
        routeLink: 'soccer-slot',
        skygamesLink: 'soccer-slot'
      }
    ];

    constructor(private route: ActivatedRoute, private userService: UserService) {}

    ngOnInit() {
      this.clientBudget = this.userService.creditStatus;
      this.route.paramMap.subscribe(params => {
        const gameName = params.get('gamename');
        const randomGamePicker = Math.round(Math.random()*14) + 1;
        this.selectedGame = this.gamesList.find(gameItem => gameItem.routeLink === gameName);
        const gameUrl = this.selectedGame && this.selectedGame.skygamesLink ? this.selectedGame.skygamesLink : this.gamesList[randomGamePicker].skygamesLink;
        this.gameBlock = '<iframe budget="' + this.clientBudget + '" src="/skygames/' + gameUrl + '/index.html"></iframe>'
      });

      window.onmessage = gameActionEvent => { 
        if (gameActionEvent && gameActionEvent.data){
          if (gameActionEvent.data.iScore) {
            console.log("ISCORE", gameActionEvent.data.iScore);
            this.userService.creditStatus = gameActionEvent.data.iScore;
            console.log("C STATUS", this.userService.creditStatus);
          }
          if (gameActionEvent.data.yScore) { 
            // TODO CUSTOM FOR SCRATCH FRUIT GAME
            // CALCULATION IS CURRENTLY WRONG!!!
            console.log("YSCORE", gameActionEvent.data.yScore);
            this.userService.creditStatus += gameActionEvent.data.yScore;
            console.log("C STATUS", this.userService.creditStatus);
          }
          if (gameActionEvent.data.myBet) {
            console.log("IBET", gameActionEvent.data.myBet);
            this.userService.creditStatus -= gameActionEvent.data.myBet;
            console.log("C STATUS", this.userService.creditStatus);
          }
        }
      };
    }


}
