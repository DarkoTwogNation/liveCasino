import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-encapsulated-pass',
  templateUrl: './encapsulated-pass.component.html',
  styleUrls: ['./encapsulated-pass.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EncapsulatedPassComponent implements OnInit {

  @Input() passwordVal;

  constructor() { }

  ngOnInit() {
  }

}
