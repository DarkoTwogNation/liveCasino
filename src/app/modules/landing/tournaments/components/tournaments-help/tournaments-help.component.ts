import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-tournaments-help',
  templateUrl: './tournaments-help.component.html',
  styleUrls: ['./tournaments-help.component.scss']
})
export class TournamentsHelpComponent implements OnInit {

  constructor(private _location: Location) 
  {}

  ngOnInit() {
  }

  
  backClick() {
    this._location.back();
  }
}
