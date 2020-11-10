import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { UrlService } from './api.paths';
import { BehaviorSubject } from 'rxjs';

export class UserAccount {
    constructor(
        public token?: string,
        public email?:  string,
        public firstName?: string,
        public lastName?:  string,
        public login?:  string,
        public activated?:  boolean,
        public authorities?:  [string],
        public createdBy?:  string,
        public createdDate?:  string,
        public id?:  number,
        public imageUrl?:  string,
        public langKey?:  string,
        public lastModifiedBy?:  string,
        public lastModifiedDate?:  string,
        public title?: string
    ) { }
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    
    private client: BehaviorSubject<UserAccount> = new BehaviorSubject<UserAccount>(new UserAccount());
    clientData = this.client.asObservable();

    constructor(private http: HttpClient, private urls: UrlService) { }

    setCurrentUser()  {
        if (this.isLoggedIn) {
            const userFromStorage = JSON.parse(localStorage.getItem('currentUser'));
            this.client.next(userFromStorage);
        }
    }

    login(username: string, password: string) {
        return this.http.post<any>(this.urls.authenticate, { username, password })
            .pipe(
                tap(resp => {
                    this.client.next(new UserAccount(resp.id_token));
                }),
                map(resp => {
                    return this.fetchAccount().toPromise();
                })
            );
    }

    fetchAccount() {
        return this.http.get<any>(this.urls.account.getAccount, { headers: {Authorization: `Bearer ${this.client.value.token}`}})
            .pipe(
                tap(user => {
                    const token = this.client.value.token;
                    this.client.next(
                        new UserAccount(
                            token,
                            user.email,
                            user.firstName,
                            user.lastName,
                            user.login,
                            user.activated,
                            user.authorities,
                            user.createdBy,
                            user.createdDate,
                            user.id,
                            user.imageUrl,
                            user.langKey,
                            user.lastModifiedBy,
                            user.lastModifiedDate,
                        ));
                    localStorage.setItem('currentUser', JSON.stringify(this.client.getValue()));
                }),
                map(user => {
                    return user
                })
            )
    }

    signup(login: string, password: string, email: string, promocode: string) {
        return this.http.post<any>(this.urls.account.registerAccount, { login, password, email, promocode });
    }

    get isLoggedIn(): boolean {
        // Check if current date is before token
        // expiration and user is signed in locally
        return !!localStorage.getItem('currentUser');
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    resetPassword (email: string) {
        return this.http.post<any>(`http://localhost:4000/users/forgotpassword`, { email })
        .pipe(map(emailSent => {
            return emailSent;
        }));
    }
}
