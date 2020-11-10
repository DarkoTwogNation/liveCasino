import { Component, OnInit } from '@angular/core';
// import { Message } from 'src/app/core/models/entities/message';
import { PaginationInstance } from 'ngx-pagination';
import { UserModalService } from '../../components/user-message-modal/user-message-modal.service';


@Component({
  selector: 'app-user-account-messages',
  templateUrl: './user-account-messages.component.html',
  styleUrls: ['./user-account-messages.component.scss']
})
export class UserAccountMessagesComponent implements OnInit {
  private messageForRemoval: any;
  public messages: any[] = [];
  public activePage = 1;
  public filter = '';
  public maxSize = 5;
  public directionLinks = true;
  public autoHide = true;
  public responsive = false;
  public previewOnly = true;
  public config: PaginationInstance;

  constructor(private userModalService: UserModalService) {}

  ngOnInit() {
    this.loadAllMessages();
    this.config =  {
      id: 'advanced',
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.messages ? this.messages.length : 10
    };

    this.userModalService.modalActionObs.subscribe(confirm => {
      if(confirm) {
        this.deleteMessage();
      } else {
        this.messageForRemoval = null;
      }
    });
  }

  loadAllMessages(): void {
    this.messages.push(
      {
        subject: 'A SLOTS TOURNAMENT YOU ENTERED HAS COMPLETED - CHECK YOUR POSITION!',
        date: new Date()
      },
      {
        subject: 'A SLOTS TOURNAMENT YOU ENTERED HAS COMPLETED - CHECK YOUR POSITION!',
        date: new Date()
      },
      {
        subject: 'A SLOTS TOURNAMENT YOU ENTERED HAS COMPLETED - CHECK YOUR POSITION!',
        date: new Date()
      },
      {
        subject: 'A SLOTS TOURNAMENT YOU ENTERED HAS COMPLETED - CHECK YOUR POSITION!',
        date: new Date()
      },
      {
        subject: 'A SLOTS TOURNAMENT YOU ENTERED HAS COMPLETED - CHECK YOUR POSITION1!',
        date: new Date()
      },
      {
        subject: 'A SLOTS TOURNAMENT YOU ENTERED HAS COMPLETED - CHECK YOUR POSITION!',
        date: new Date()
      },
      {
        subject: 'A SLOTS TOURNAMENT YOU ENTERED HAS COMPLETED - CHECK YOUR POSITION!',
        date: new Date()
      },
      {
        subject: 'A SLOTS TOURNAMENT YOU ENTERED HAS COMPLETED - CHECK YOUR POSITION2!',
        date: new Date()
      },
      {
        subject: 'A SLOTS TOURNAMENT YOU ENTERED HAS COMPLETED - CHECK YOUR POSITION!',
        date: new Date()
      },
      {
        subject: 'A SLOTS TOURNAMENT YOU ENTERED HAS COMPLETED - CHECK YOUR POSITION!',
        date: new Date()
      },
      {
        subject: 'A SLOTS TOURNAMENT YOU ENTERED HAS COMPLETED - CHECK YOUR POSITION3!',
        date: new Date()
      },
      {
        subject: 'A SLOTS TOURNAMENT YOU ENTERED HAS COMPLETED - CHECK YOUR POSITION!',
        date: new Date()
      },
      {
        subject: 'A SLOTS TOURNAMENT YOU ENTERED HAS COMPLETED - CHECK YOUR POSITION!',
        date: new Date()
      },
      {
        subject: 'A SLOTS TOURNAMENT YOU ENTERED HAS COMPLETED - CHECK YOUR POSITION5!',
        date: new Date()
      },
      {
        subject: 'A SLOTS TOURNAMENT YOU ENTERED HAS COMPLETED - CHECK YOUR POSITION!',
        date: new Date()
      },
      {
        subject: 'A SLOTS TOURNAMENT YOU ENTERED HAS COMPLETED - CHECK YOUR POSITION!',
        date: new Date()
      },
      {
        subject: 'A SLOTS TOURNAMENT YOU ENTERED HAS COMPLETED - CHECK YOUR POSITION8!',
        date: new Date()
      },
      {
        subject: 'A SLOTS TOURNAMENT YOU ENTERED HAS COMPLETED - CHECK YOUR POSITION!',
        date: new Date()
      },
      {
        subject: 'A SLOTS TOURNAMENT YOU ENTERED HAS COMPLETED - CHECK YOUR POSITION3!',
        date: new Date()
      },
      {
        subject: 'A SLOTS TOURNAMENT YOU ENTERED HAS COMPLETED - CHECK YOUR POSITION!',
        date: new Date()
      });
  }

  pageChanged(e: number) {
    this.config.currentPage = e;
  }

  deleteMessage() {
    if (this.messageForRemoval) {
      console.log("DELETED MESSAGE ", this.messageForRemoval.subject);
      this.messageForRemoval = null;
    }
  }

  removeMessage(message: Message) {
    this.messageForRemoval = message;
    this.userModalService.showModal();
  }
}
