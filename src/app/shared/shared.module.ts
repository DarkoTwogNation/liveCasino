import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { CountdownModule, CountdownGlobalConfig } from 'ngx-countdown';
import { MomentModule } from 'ngx-moment';
import { NgxPaginationModule } from 'ngx-pagination';

import {CreditCardsComponent} from '../components/credit-cards/credit-cards.component';
import { EncapsulatedPassComponent } from '../components/encapsulated-pass/encapsulated-pass.component';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { SafePipe } from '../_helpers/safe-pipe';
import { UrlService } from '../core/http/api.paths';
import { AutofocusDirective } from '../_helpers/autofocus.directive';

@NgModule({
    declarations: [
        CreditCardsComponent,
        EncapsulatedPassComponent,
        SafePipe,
        AutofocusDirective
    ],
    imports: [
        CommonModule,
        PasswordStrengthMeterModule,
        CountdownModule,
        MomentModule,
        NgxPaginationModule
    ],
    exports: [
        CreditCardsComponent,
        EncapsulatedPassComponent,
        SafePipe,
        CommonModule,
        CountdownModule,
        MomentModule,
        NgxPaginationModule,
        AutofocusDirective
    ],
    providers: [
        { provide: CountdownGlobalConfig },
        UrlService
    ]
})
export class SharedModule {

}
