import { Component, OnInit } from '@angular/core';

// import { Tournament } from 'src/app/core/models/entities/tournament';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {
  public tournaments: any[] = [];
  public tournamentDetails: any;
  constructor() {}

  ngOnInit() {
    this.loadTournaments();
  }

  loadTournaments(): void {
    this.tournaments.push(
      {
        id: 54035,
        tournamentInfo: 'Full Moon Diamond',
        entryCost: 100000,
        prizePool: 600000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        relatedTournaments: [
          {
            id: 1,
            tournamentImage: '../../../../assets/img/tournament-img.jpg',
            playersJoined: 2,
            prizePool: 10000,
            entryCost: 500
          },
          {
            id: 2,
            tournamentImage: '../../../../assets/img/tournament-img.jpg',
            playersJoined: 4,
            prizePool: 20000,
            entryCost: 1000
          },
          {
            id: 3,
            tournamentImage: '../../../../assets/img/tournament-img.jpg',
            playersJoined: 6,
            prizePool: 30000,
            entryCost: 1500
          }
        ]
      },
      {
        id: 54036,
        tournamentInfo: 'Full Moon Diamond',
        entryCost: 200000,
        prizePool: 700000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        relatedTournaments: [
          {
            id: 1,
            tournamentImage: '../../../../assets/img/tournament-img.jpg',
            playersJoined: 9,
            prizePool: 40000,
            entryCost: 2000
          }
        ]
      },
      {
        id: 54037,
        tournamentInfo: 'Full Moon Diamond',
        entryCost: 300000,
        prizePool: 800000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg',
        relatedTournaments: [
          {
            id: 1,
            tournamentImage: '../../../../assets/img/tournament-img.jpg',
            playersJoined: 3,
            prizePool: 50000,
            entryCost: 2500
          },
          {
            id: 2,
            tournamentImage: '../../../../assets/img/tournament-img.jpg',
            playersJoined: 5,
            prizePool: 60000,
            entryCost: 3000
          },
          {
            id: 3,
            tournamentImage: '../../../../assets/img/tournament-img.jpg',
            playersJoined: 4,
            prizePool: 70000,
            entryCost: 3500
          },
          {
            id: 4,
            tournamentImage: '../../../../assets/img/tournament-img.jpg',
            playersJoined: 8,
            prizePool: 80000,
            entryCost: 4000
          },
          {
            id: 5,
            tournamentImage: '../../../../assets/img/tournament-img.jpg',
            playersJoined: 1,
            prizePool: 90000,
            entryCost: 4500
          }
        ]
      },
      {
        id: 54038,
        tournamentInfo: 'Full Moon Diamond',
        entryCost: 400000,
        prizePool: 900000,
        tournamentImage: 'assets/img/Image1.png',
        tournamentDetailImage: '../../../../assets/img/tournament-img.jpg'
      }
    );
  }

  seeTournamentDetails(tournament: any): void {
    this.tournamentDetails = tournament;
  }
}
