import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {UserPersonalizeAccountComponent} from './pages/user-personalize-account/user-personalize-account.component';
import {UserAccountDetailsComponent} from './pages/user-account-details/user-account-details.component';
import {UserAccountBalanceComponent} from './pages/user-account-balance/user-account-balance.component';
import {UserAccountHistoryComponent} from './pages/user-account-history/user-account-history.component';
import {UserAccountWagersComponent} from './pages/user-account-wagers/user-account-wagers.component';
import {UserAccountRewardsComponent} from './pages/user-account-rewards/user-account-rewards.component';
import {UserAccountMessagesComponent} from './pages/user-account-messages/user-account-messages.component';
import {
    UserAccountMarketingPreferencesComponent
} from './pages/user-account-marketing-preferences/user-account-marketing-preferences.component';
import {UserChangePasswordComponent} from './pages/user-change-password/user-change-password.component';
import {UserAccountReferralComponent} from './pages/user-account-referral/user-account-referral.component';
import {UserPaymentInformationsComponent} from './pages/user-payment-informations/user-payment-informations.component';
import {UserComponent} from './user.component';
import {UserRoutingModule} from './user-routing.module';
import { UserNavComponent } from './components/user-nav/user-nav.component';
import { UserNeedHelpComponent } from './components/user-need-help/user-need-help.component';
import {SharedModule} from '../../shared/shared.module';
import { UserAccountWagerDetailsComponent } from './pages/user-account-wager-details/user-account-wager-details.component';
import { UserMessageModalComponent } from './components/user-message-modal/user-message-modal.component';
import { UserMessageDetailsComponent } from './pages/user-message-details/user-message-details.component';
import { DatePickerComponent } from '../../components/date-picker/date-picker.component';
import { PersonalDetailsComponent } from './pages/user-payment-informations/personal-details/personal-details.component';
import { CardDetailsComponent } from './pages/user-payment-informations/card-details/card-details.component';
import { AddressDetailsComponent } from './pages/user-payment-informations/address-details/address-details.component';
import { PaymentPackageComponent } from './pages/user-payment-informations/payment-package/payment-package.component';
import { UserModalService } from './components/user-message-modal/user-message-modal.service';

@NgModule({
    declarations: [
        UserPersonalizeAccountComponent,
        UserAccountDetailsComponent,
        UserAccountBalanceComponent,
        UserAccountHistoryComponent,
        UserAccountWagersComponent,
        UserAccountWagerDetailsComponent,
        UserAccountRewardsComponent,
        UserAccountMessagesComponent,
        UserAccountMarketingPreferencesComponent,
        UserChangePasswordComponent,
        UserAccountReferralComponent,
        UserPaymentInformationsComponent,
        UserComponent,
        UserNavComponent,
        UserNeedHelpComponent,
        UserMessageModalComponent,
        UserMessageDetailsComponent,
        DatePickerComponent,
        PersonalDetailsComponent,
        CardDetailsComponent,
        AddressDetailsComponent,
        PaymentPackageComponent
    ],
    imports: [
        UserRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        UserModalService
    ]
})
export class UserModule { }
