import { Component, OnInit, Injectable, ViewContainerRef, ComponentRef, ViewRef, ElementRef } from '@angular/core';
import { UserModalService } from './user-message-modal.service';

@Component({
  selector: 'app-user-message-modal',
  templateUrl: './user-message-modal.component.html',
  styleUrls: ['./user-message-modal.component.scss']
})
export class UserMessageModalComponent implements OnInit {
  showModal: boolean = false;

  constructor(private modalService: UserModalService, private _viewRef: ElementRef) { }

  ngOnInit() {
    this._viewRef.nativeElement.style.display = "none";

    this.modalService.modalShowingObs.subscribe(status => {
      // this._view.element.nativeElement.hide();
      if(status) {
        this._viewRef.nativeElement.style.display = "block";
      } else {
        this._viewRef.nativeElement.style.display = "none";
      }
    })

  }

  confirm() {
    this.modalService.confirmDelete();
  }

  cancel() {
    this.modalService.hideModal();
  }

}
