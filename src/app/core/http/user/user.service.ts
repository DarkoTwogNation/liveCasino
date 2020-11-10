import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
    private userData = {
        creditStatus: 14921
    }

    constructor(private http: HttpClient) { }

    get creditStatus(): number {
        // Check if current date is before token
        // expiration and user is signed in locally
        return this.userData.creditStatus;
    }

    set creditStatus(creditStatus: number) {
        this.userData.creditStatus = creditStatus;
    }
}
