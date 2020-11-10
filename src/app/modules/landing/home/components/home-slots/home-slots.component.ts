import { Component, OnInit } from '@angular/core';
// import { Slot } from 'src/app/core/models/entities/slot';

@Component({
  selector: 'app-home-slots',
  templateUrl: './home-slots.component.html',
  styleUrls: ['./home-slots.component.scss']
})
export class HomeSlotsComponent implements OnInit {
  public slots: any[] = [];

  constructor() {}

  ngOnInit() {
    this.loadSlots();
  }

  loadSlots(): void {
    // TODO: Load slots from backend
    this.slots.push(
      {
        image: 'assets/img/gametype.2095.jpg'
      },
      {
        image: 'assets/img/gametype.2095_2.jpg'
      },
      {
        image: 'assets/img/gametype.2095_3.jpg'
      },
      {
        image: 'assets/img/gametype.2095_4.jpg'
      }
    );
  }
}
