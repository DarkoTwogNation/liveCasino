import { Injectable } from '@angular/core';

export interface TypedDynamic<T> {
    [key: string]: T;
}

@Injectable()
export class UrlService {
    public baseUrl = 'http://192.168.0.25:9060/api/';

    public authenticate = this.baseUrl + 'authenticate';

    public getActiveProfiles = this.baseUrl + 'profile-info';

    public account: TypedDynamic<string> = {
        getAccount:  this.baseUrl + 'account',
        saveAccount: this.baseUrl + 'account',
        changePassword:    this.baseUrl + 'account/change-password',
        finishPasswordReset:     this.baseUrl + 'account/reset-password/finish',
        requestPasswordReset: this.baseUrl + 'account/reset-password/init',
        activateAccount: this.baseUrl + 'activate',
        isAuthenticated: this.baseUrl + 'authenticate',
        registerAccount: this.baseUrl + 'register'
    };

    public users: TypedDynamic<string> = {
        getAllUsers:  this.baseUrl + 'users',
        createUser: this.baseUrl + 'users',
        updateUser:    this.baseUrl + 'users',
        getAuthorities:     this.baseUrl + 'users/authorities',
        deleteUser: this.baseUrl + 'users/',
        getUser: this.baseUrl + 'users'
    };
}
