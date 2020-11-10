import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserComponent} from './user.component';
import {UserAccountBalanceComponent} from './pages/user-account-balance/user-account-balance.component';
import {UserAccountDetailsComponent} from './pages/user-account-details/user-account-details.component';
import {UserAccountHistoryComponent} from './pages/user-account-history/user-account-history.component';
import {UserAccountMarketingPreferencesComponent} from './pages/user-account-marketing-preferences/user-account-marketing-preferences.component';
import {UserAccountReferralComponent} from './pages/user-account-referral/user-account-referral.component';
import {UserAccountRewardsComponent} from './pages/user-account-rewards/user-account-rewards.component';
import {UserAccountWagersComponent} from './pages/user-account-wagers/user-account-wagers.component';
import {UserAccountWagerDetailsComponent} from './pages/user-account-wager-details/user-account-wager-details.component';
import {UserChangePasswordComponent} from './pages/user-change-password/user-change-password.component';
import {UserPaymentInformationsComponent} from './pages/user-payment-informations/user-payment-informations.component';
import {UserPersonalizeAccountComponent} from './pages/user-personalize-account/user-personalize-account.component';
import { UserAccountMessagesComponent } from './pages/user-account-messages/user-account-messages.component';
import { UserMessageDetailsComponent } from './pages/user-message-details/user-message-details.component';
import { AuthGuard } from '../../_guards';


const UserRoutes: Routes = [
    {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'account-balance', 
                component: UserAccountBalanceComponent,
            },
            {
                path: 'account-details',
                component: UserAccountDetailsComponent,
            },
            {
                path: 'account-history',
                component: UserAccountHistoryComponent,
            },
            {
                path: 'account-marketing',
                component: UserAccountMarketingPreferencesComponent,
            },
            {
                path: 'referral',
                component: UserAccountReferralComponent,
            },
            {
                path: 'reward',
                component: UserAccountRewardsComponent,
            },
            {
                path: 'wagers',
                component: UserAccountWagersComponent,
            },
            {
                path: 'wager-details',
                component: UserAccountWagerDetailsComponent,
            },
            {
                path: 'change-password',
                component: UserChangePasswordComponent,
            },
            {
                path: 'payment-informations/:packname',
                component: UserPaymentInformationsComponent,
            },
            {
                path: 'personalize-account',
                component: UserPersonalizeAccountComponent,
            },
            // {
            //     path: 'account-messages',
            //     component: UserAccountMessagesComponent,
            // },
            {
                path: 'message-details',
                component: UserMessageDetailsComponent,
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(UserRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
