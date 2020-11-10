import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserModalService {
    private modalShowing: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private modalAction: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    
    modalActionObs = this.modalAction.asObservable();
    modalShowingObs = this.modalShowing.asObservable();

    showModal() {
        this.modalShowing.next(true);
    }

    hideModal() {
        this.modalAction.next(false);
        this.modalShowing.next(false);
    }

    confirmDelete() {
        this.modalAction.next(true);
        this.modalShowing.next(false);
    }
}