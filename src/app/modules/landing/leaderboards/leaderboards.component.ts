import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.scss']
})
export class LeaderBoardsComponent implements OnInit {
  activePage: number = 1;

  constructor() { }

  ngOnInit() {
  }

  pageChanged() {
    
  }

}
