import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-need-help',
  templateUrl: './user-need-help.component.html',
  styleUrls: ['./user-need-help.component.scss'],
  host: {'class': 'need-help-box col-12 col-md-4 ml-auto'}
})
export class UserNeedHelpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
