import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/modals/log-in/log-in.component';
import { SignUpComponent } from './components/modals/sign-up/sign-up.component';
import { ForgotPassword } from './components/modals/forgot-password/forgot-password.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing/landing.module').then(mod => mod.LandingModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then(mod => mod.UserModule)
  },
  {
    path: 'login',
    component: LogInComponent,
    outlet: 'modal'
  },
  {
    path: 'signup',
    component: SignUpComponent,
    outlet: 'modal'
  },
  {
    path: 'forgot-password',
    component: ForgotPassword,
    outlet: 'modal'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
