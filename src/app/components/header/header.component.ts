import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogInComponent } from '../modals/log-in/log-in.component';
import { SignUpComponent } from '../modals/sign-up/sign-up.component';
import { AuthenticationService, UserService } from '../../core/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userCreditStatus: number = 0;
  public clientUsername: string = '';

  constructor(
    private router : Router,
    private modalService: NgbModal,
    public authService: AuthenticationService,
    public userService: UserService) { }

  ngOnInit() {
    this.userCreditStatus = this.userService.creditStatus;

    this.authService.clientData.subscribe(data => {
      this.clientUsername = data.login;
    })
  }

  showLogin() {
    // const modalRef = this.modalService.open(ModalComponent);
    const modalRef = this.modalService.open(LogInComponent);
    modalRef.componentInstance.title = 'Login';

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  showSignUp() {
    // const modalRef = this.modalService.open(ModalComponent);
    const modalRef = this.modalService.open(SignUpComponent);
    modalRef.componentInstance.title = 'SignUp';

    modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      console.log(receivedEntry);
    })

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  logoutUser () {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }

}
