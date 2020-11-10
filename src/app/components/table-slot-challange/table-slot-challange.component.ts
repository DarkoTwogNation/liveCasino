import { Component, OnInit, ViewChild, Input } from '@angular/core';
// import { Leaderboard } from 'src/app/core/models/entities/leaderboard';
import { CountdownConfig, CountdownEvent, CountdownComponent } from 'ngx-countdown';
import * as moment from 'moment';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-table-slot-challange',
  templateUrl: './table-slot-challange.component.html',
  styleUrls: ['./table-slot-challange.component.scss']
})
export class TableSlotChallangeComponent implements OnInit {
  @Input() previewOnly: boolean;
  @ViewChild('cd', { static: false }) public countdown: CountdownComponent;
  activePage: number = 1;

  public leaderBoardsHourly: any[] = [];
  public leaderBoardsDaily: any[] = [];
  public leaderBoardsWeekly: any[] = [];
  public leaderBoardsTable: any[] = [];
  public activeView: string = "hourly";

  public leaderBoardsActive: any[] = [];

  public countdownConfig: CountdownConfig;
  public daysLeft: string = '';

  public filter: string = '';
  public maxSize: number = 5;
  public directionLinks: boolean = true;
  public autoHide: boolean = true;
  public responsive: boolean = false;
  public config: PaginationInstance = {
      id: 'advanced',
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: 10
  };

  constructor() {}

  ngOnInit() {
    if (this.previewOnly) {
      this.config =  {
        id: 'advanced',
        itemsPerPage: 10,
        currentPage: 1,
        totalItems: 10
      };
    }
    this.loadLeaderboard();
  }

  loadLeaderboard(): void {
    this.loadHourlyLeaderBoard();
    this.loadDailyLeaderBoard();
    this.loadWeeklyLeaderBoard();
    this.loadBoardsLeaderBoard();

    this.switchView('hourly');
  }

  loadHourlyLeaderBoard(): void {
    this.leaderBoardsHourly.push(
      {
        rank: '1st',
        name: 'Rossi',
        virtualCreditWon: 46000,
        mostPlayed: '/assets/img/most-played.jpg',
        award: 20000
      },
      {
        rank: '2st',
        name: 'Joseph',
        virtualCreditWon: 45000,
        mostPlayed: '/assets/img/most-played_2.jpg',
        award: 20000
      },
      {
        rank: '3st',
        name: 'Annie',
        virtualCreditWon: 44000,
        mostPlayed: '/assets/img/most-played_3.jpg',
        award: 20000
      },
      {
        rank: '4st',
        name: 'Harry',
        virtualCreditWon: 43000,
        mostPlayed: '/assets/img/most-played_4.jpg',
        award: 20000
      },
      {
        rank: '5st',
        name: 'Vodlan',
        virtualCreditWon: 42000,
        mostPlayed: '/assets/img/most-played_5.jpg',
        award: 20000
      },
      {
        rank: '6st',
        name: 'Lawrence',
        virtualCreditWon: 41000,
        mostPlayed: '/assets/img/most-played_6.jpg',
        award: 20000
      },
      {
        rank: '7st',
        name: 'Steim',
        virtualCreditWon: 40000,
        mostPlayed: '/assets/img/most-played_7.jpg',
        award: 20000
      },
      {
        rank: '8st',
        name: 'Guest',
        virtualCreditWon: 39000,
        mostPlayed: '/assets/img/most-played_8.jpg',
        award: 20000
      },
      {
        rank: '9st',
        name: 'Luka',
        virtualCreditWon: 38000,
        mostPlayed: '/assets/img/most-played_9.jpg',
        award: 20000
      },
      {
        rank: '10st',
        name: 'Ivan',
        virtualCreditWon: 37000,
        mostPlayed: '/assets/img/most-played_10.jpg',
        award: 20000
      }
    );
  }

  loadDailyLeaderBoard(): void {
    this.leaderBoardsDaily.push(
      {
        rank: '1st',
        name: 'RossiRossi',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_7.jpg',
        award: 190000
      },
      {
        rank: '2st',
        name: 'JosephRossi',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_7.jpg',
        award: 190000
      },
      {
        rank: '3st',
        name: 'AnnieRossi',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_7.jpg',
        award: 190000
      },
      {
        rank: '4st',
        name: 'HarryRossi',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_7.jpg',
        award: 190000
      },
      {
        rank: '5st',
        name: 'VodlanRossi',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_7.jpg',
        award: 190000
      },
      {
        rank: '6st',
        name: 'LawrenceRossi',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_7.jpg',
        award: 190000
      },
      {
        rank: '7st',
        name: 'SteimRossi',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_7.jpg',
        award: 190000
      },
      {
        rank: '8st',
        name: 'GuestRossi',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_7.jpg',
        award: 190000
      },
      {
        rank: '9st',
        name: 'LukaRossi',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_7.jpg',
        award: 190000
      },
      {
        rank: '10st',
        name: 'IvanRossi',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_7.jpg',
        award: 190000
      }
    );
  }

  loadWeeklyLeaderBoard(): void {
    this.leaderBoardsWeekly.push(
      {
        rank: '1st',
        name: 'Rossi',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_7.jpg',
        award: 190000
      },
      {
        rank: '2st',
        name: 'Joseph',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_7.jpg',
        award: 190000
      },
      {
        rank: '3st',
        name: 'Annie',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_7.jpg',
        award: 190000
      },
      {
        rank: '4st',
        name: 'Harry',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_3.jpg',
        award: 190000
      },
      {
        rank: '5st',
        name: 'Vodlan',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_3.jpg',
        award: 190000
      },
      {
        rank: '6st',
        name: 'Lawrence',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_3.jpg',
        award: 190000
      },
      {
        rank: '7st',
        name: 'Steim',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_3.jpg',
        award: 190000
      },
      {
        rank: '8st',
        name: 'Guest',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_3.jpg',
        award: 190000
      },
      {
        rank: '9st',
        name: 'Luka',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_3.jpg',
        award: 190000
      },
      {
        rank: '10st',
        name: 'Ivan',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_3.jpg',
        award: 190000
      }
    );
  }

  loadBoardsLeaderBoard(): void {
    this.leaderBoardsTable.push(
      {
        rank: '1st',
        name: 'Rossi',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_7.jpg',
        award: 190000
      },
      {
        rank: '2st',
        name: 'Joseph',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_7.jpg',
        award: 190000
      },
      {
        rank: '3st',
        name: 'Annie',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_7.jpg',
        award: 190000
      },
      {
        rank: '4st',
        name: 'Harry',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_3.jpg',
        award: 190000
      },
      {
        rank: '5st',
        name: 'Vodlan',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_3.jpg',
        award: 190000
      },
      {
        rank: '6st',
        name: 'Lawrence',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_3.jpg',
        award: 190000
      },
      {
        rank: '7st',
        name: 'Steim',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_3.jpg',
        award: 190000
      },
      {
        rank: '8st',
        name: 'Guest',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_3.jpg',
        award: 190000
      },
      {
        rank: '9st',
        name: 'Luka',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_3.jpg',
        award: 190000
      },
      {
        rank: '10st',
        name: 'Ivan',
        virtualCreditWon: 1000000,
        mostPlayed: '/assets/img/most-played_3.jpg',
        award: 190000
      }
    );
  }

  switchView(viewType: string) {
    this.activeView = viewType;
    let timeDiff = 0;
    let daysDiff = 0;
    switch(viewType) {
      case 'hourly':
        this.leaderBoardsActive = this.leaderBoardsHourly;
        let nextHour = moment().hour() + 1;
        timeDiff = -1 * moment().diff(moment().hour(nextHour).minute(0).second(0), 'seconds');
        daysDiff = 0;
        break;
      case 'daily':
        this.leaderBoardsActive = this.leaderBoardsDaily;
        let nextDay = moment().day() + 1;
        timeDiff = -1 * moment().diff(moment().day(nextDay).hour(0).minute(0).second(0), 'seconds');
        daysDiff = 0;
        break;
      case 'weekly':
        this.leaderBoardsActive = this.leaderBoardsWeekly;
        let nextWeek = moment().week() + 1;
        timeDiff = -1 * moment().diff(moment().week(nextWeek).day(0).hour(0).minute(0).second(0), 'seconds');
        daysDiff = -1 * moment().diff(moment().week(nextWeek).day(0).hour(0).minute(0).second(0), 'days');
        break;
      default:
        this.leaderBoardsActive = this.leaderBoardsTable;
    }

    console.log("LEFT TIME", timeDiff);

    this.daysLeft = daysDiff? daysDiff + 'days ': '';

    this.countdownConfig = {
      leftTime: timeDiff
    };

    if (this.countdown) {
      this.countdown.begin();
    }

    this.config.currentPage = 1;
  }

  countdownEvent(event: CountdownEvent) {
    console.log("EVENT HAPPENED", event);
  }

  pageChanged(e:number) {
    this.config.currentPage = e;
    console.log("CHANGED PAGE EVENT ", e);
  }
}
