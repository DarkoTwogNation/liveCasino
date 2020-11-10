import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-leaderboards',
  templateUrl: './home-leaderboards.component.html',
  styleUrls: ['./home-leaderboards.component.scss'],
  host: {'class': 'home-boards'}
})
export class HomeLeaderboardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
