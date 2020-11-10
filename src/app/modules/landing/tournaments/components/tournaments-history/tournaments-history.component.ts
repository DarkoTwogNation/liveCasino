import { Component, OnInit, Input } from '@angular/core';
// import { Tournament } from 'src/app/core/models/entities/tournament';
import {Location} from '@angular/common';
import { PaginationInstance } from 'ngx-pagination';


@Component({
  selector: 'app-tournament-history',
  templateUrl: './tournaments-history.component.html',
  styleUrls: ['./tournaments-history.component.scss']
})
export class TournamentsHistoryComponent implements OnInit {
  public tournamentsHistory: any[] = [];
  public activePage = 1;
  public filter = '';
  public maxSize = 5;
  public directionLinks = true;
  public autoHide = true;
  public responsive = false;
  public previewOnly = true;
  public config: PaginationInstance;

  // tslint:disable-next-line: variable-name
  constructor(private _location: Location) {}

  ngOnInit() {
    this.loadTournamentsHistory();
    this.config =  {
      id: 'advanced',
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.tournamentsHistory ? this.tournamentsHistory.length : 10
    };
  }

  backClick() {
    this._location.back();
  }

  loadTournamentsHistory(): void {
    this.tournamentsHistory.push(
      {
        id: 53766,
        tournamentInfo: 'Full Moon Diamond Tournament',
        entryCost: 10000,
        prizePool: 700000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        date: new Date(),
        tournamentStatus: 'In Play'
      },
      {
        id: 53767,
        tournamentInfo: 'Full Moon Diamond Tournament',
        entryCost: 20000,
        prizePool: 80000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        date: new Date(),
        tournamentStatus: 'Completed'
      },
      {
        id: 53768,
        tournamentInfo: 'Full Moon Diamond Tournament',
        entryCost: 300000,
        prizePool: 900000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        date: new Date(),
        tournamentStatus: 'Completed'
      },
      {
        id: 53766,
        tournamentInfo: 'Full Moon Diamond Tournament',
        entryCost: 10000,
        prizePool: 700000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        date: new Date(),
        tournamentStatus: 'In Play'
      },
      {
        id: 53767,
        tournamentInfo: 'Full Moon Diamond Tournament',
        entryCost: 20000,
        prizePool: 80000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        date: new Date(),
        tournamentStatus: 'Completed'
      },
      {
        id: 53768,
        tournamentInfo: 'Full Moon Diamond Tournament',
        entryCost: 300000,
        prizePool: 900000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        date: new Date(),
        tournamentStatus: 'Completed'
      },
      {
        id: 53766,
        tournamentInfo: 'Full Moon Diamond Tournament',
        entryCost: 10000,
        prizePool: 700000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        date: new Date(),
        tournamentStatus: 'In Play'
      },
      {
        id: 53767,
        tournamentInfo: 'Full Moon Diamond Tournament',
        entryCost: 20000,
        prizePool: 80000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        date: new Date(),
        tournamentStatus: 'Completed'
      },
      {
        id: 53768,
        tournamentInfo: 'Full Moon Diamond Tournament',
        entryCost: 300000,
        prizePool: 900000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        date: new Date(),
        tournamentStatus: 'Completed'
      },
      {
        id: 53766,
        tournamentInfo: 'Full Moon Diamond Tournament',
        entryCost: 10000,
        prizePool: 700000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        date: new Date(),
        tournamentStatus: 'In Play'
      },
      {
        id: 53767,
        tournamentInfo: 'Full Moon Diamond Tournament',
        entryCost: 20000,
        prizePool: 80000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        date: new Date(),
        tournamentStatus: 'Completed'
      },
      {
        id: 53768,
        tournamentInfo: 'Full Moon Diamond Tournament',
        entryCost: 300000,
        prizePool: 900000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        date: new Date(),
        tournamentStatus: 'Completed'
      },
      {
        id: 53766,
        tournamentInfo: 'Full Moon Diamond Tournament',
        entryCost: 10000,
        prizePool: 700000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        date: new Date(),
        tournamentStatus: 'In Play'
      },
      {
        id: 53767,
        tournamentInfo: 'Full Moon Diamond Tournament',
        entryCost: 20000,
        prizePool: 80000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        date: new Date(),
        tournamentStatus: 'Completed'
      },
      {
        id: 53768,
        tournamentInfo: 'Full Moon Diamond Tournament',
        entryCost: 300000,
        prizePool: 900000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        date: new Date(),
        tournamentStatus: 'Completed'
      },
      {
        id: 53766,
        tournamentInfo: 'Full Moon Diamond Tournament',
        entryCost: 10000,
        prizePool: 700000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        date: new Date(),
        tournamentStatus: 'In Play'
      },
      {
        id: 53767,
        tournamentInfo: 'Full Moon Diamond Tournament',
        entryCost: 20000,
        prizePool: 80000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        date: new Date(),
        tournamentStatus: 'Completed'
      },
      {
        id: 53768,
        tournamentInfo: 'Full Moon Diamond Tournament',
        entryCost: 300000,
        prizePool: 900000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        date: new Date(),
        tournamentStatus: 'Completed'
      },
      {
        id: 53768,
        tournamentInfo: 'Full Moon Diamond Tournament',
        entryCost: 300000,
        prizePool: 900000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        date: new Date(),
        tournamentStatus: 'Completed'
      },
      {
        id: 53766,
        tournamentInfo: 'Full Moon Diamond Tournament',
        entryCost: 10000,
        prizePool: 700000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        date: new Date(),
        tournamentStatus: 'In Play'
      }
    );
  }

  pageChanged(e: number) {
    this.config.currentPage = e;
  }

}
