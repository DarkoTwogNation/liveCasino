import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JwtModule } from "@auth0/angular-jwt";

import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { GameIsLockedComponent } from './components/modals/game-is-locked/game-is-locked.component';
import { UserModule } from './modules/user/user.module';
import { ModalComponent } from './components/modals/modal/modal.component';
import { LogInComponent } from './components/modals/log-in/log-in.component';
import { SignUpComponent } from './components/modals/sign-up/sign-up.component';
import { ForgotPassword } from './components/modals/forgot-password/forgot-password.component';
import { SharedModule } from './shared/shared.module';
import { LandingModule } from './modules/landing/landing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}
// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';
import { LoadingGuard } from './_guards/preload.strategy';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    HeaderComponent,
    GameIsLockedComponent,
    ModalComponent,
    LogInComponent,
    SignUpComponent,
    ForgotPassword
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["example.com"],
        blacklistedRoutes: ["example.com/examplebadroute/"]
      }
    }),
    LandingModule,
    UserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PasswordStrengthMeterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    NgbActiveModal,
    fakeBackendProvider,
    LoadingGuard
  ],
  entryComponents: [
    LogInComponent,
    SignUpComponent,
    ForgotPassword
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
