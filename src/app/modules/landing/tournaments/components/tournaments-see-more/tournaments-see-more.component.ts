import { Component, OnInit, Input } from '@angular/core';
// import { Tournament } from 'src/app/core/models/entities/tournament';

@Component({
  selector: 'app-tournament-see-more',
  templateUrl: './tournaments-see-more.component.html',
  styleUrls: ['./tournaments-see-more.component.scss']
})
export class TournamentsSeeMoreComponent implements OnInit {


  constructor() { }

  @Input() tournament: any;

  ngOnInit() {
  }

}
