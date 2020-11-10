import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {VipComponent} from './vip/vip.component';
import {LoungeComponent} from './lounge/lounge.component';
import {SlotsComponent} from './slots/slots.component';
import {TablesComponent} from './tables/tables.component';
import {TournamentsComponent} from './tournaments/tournaments.component';
import {TournamentsInviteOnlyComponent} from './tournaments/components/tournaments-invite-only/tournaments-invite-only.component';
import {PromotionsComponent} from './promotions/promotions.component';
import {PromotionsPreviewComponent} from './promotions-preview/promotions-preview.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {SiteMapComponent} from './site-map/site-map.component';
import {TermsComponent} from './terms/terms.component';
import {FaqComponent} from './faq/faq.component';
import {SpinWheelComponent} from './spin-wheel/spin-wheel.component';
import {LeaderBoardsComponent} from './leaderboards/leaderboards.component';
import {BuyCreditsComponent} from './buy-credits/buy-credits.component';
import { AuthGuard } from '../../_guards';
import { TournamentsAllComponent } from './tournaments/components/tournaments-all/tournaments-all.component';
import { TournamentsHistoryComponent } from './tournaments/components/tournaments-history/tournaments-history.component';
import { TournamentsHelpComponent } from './tournaments/components/tournaments-help/tournaments-help.component';
import { GamePlayComponent } from './game-play/game-play.component';

const LandingRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: HomeComponent,
            },
            {
                path: 'vip',
                data: { title: 'Casino Hotel - VIP'},
                canActivate: [AuthGuard],
                component: VipComponent
            },
            {
                path: 'lounge',
                data: { title: 'Casino Hotel - Lounge'},
                component: LoungeComponent
            },
            {
                path: 'slots',
                data: { title: 'Casino Hotel - Slots'},
                component: SlotsComponent
            },
            {
                path: 'tables',
                data: { title: 'Casino Hotel - Tables'},
                component: TablesComponent
            },
            // {
            //     path: 'tournaments',
            //     component: TournamentsComponent,
            //     canActivate: [AuthGuard],
            //     children: [
            //         {
            //             path: 'all',
            //             data: { title: 'Casino Hotel - Tournaments'},
            //             component: TournamentsAllComponent
            //         },
            //         {
            //             path: 'invite',
            //             data: { title: 'Casino Hotel - Tournaments Invite Only'},
            //             canActivate: [AuthGuard],
            //             component: TournamentsInviteOnlyComponent
            //         },
            //         {
            //             path: 'history',
            //             data: { title: 'Casino Hotel - Tournaments History'},
            //             canActivate: [AuthGuard],
            //             component: TournamentsHistoryComponent
            //         },
            //         {
            //             path: 'help',
            //             data: { title: 'Casino Hotel - Tournaments Help'},
            //             component: TournamentsHelpComponent
            //         },
            //         {
            //             path: '**',
            //             redirectTo: 'all'
            //         }
            //     ]
            // },
            {
                path: 'promotions',
                data: { title: 'Casino Hotel - Promotions'},
                component: PromotionsComponent
            },
            {
                path: 'promotion/:name',
                data: { title: 'Casino Hotel - Promotions Preview'},
                component: PromotionsPreviewComponent
            },
            {
                path: 'contact-us',
                data: { title: 'Casino Hotel - Contact Us'},
                component: ContactUsComponent
            },
            {
                path: 'site-map',
                data: { title: 'Casino Hotel - Site Map'},
                component: SiteMapComponent
            },
            {
                path: 'faq',
                data: { title: 'Casino Hotel - Help & FAQ'},
                component: FaqComponent
            },
            {
                path: 'terms',
                data: { title: 'Casino Hotel - Terms & Conditions'},
                component: TermsComponent
            },
            {
                path: 'spin-wheel',
                data: { title: 'Casino Hotel - Spin Wheel'},
                canActivate: [AuthGuard],
                component: SpinWheelComponent
            },
            {
                path: 'leaderboards',
                data: { title: 'Casino Hotel - Leaderboards'},
                canActivate: [AuthGuard],
                component: LeaderBoardsComponent
            },
            {
                path: 'buy-credits',
                data: { title: 'Casino Hotel - Buy Credits'},
                component: BuyCreditsComponent
            },
            {
                path: 'games/:gamename',
                data: { title: 'Casino Hotel - Game Play'},
                canActivate: [AuthGuard],
                component: GamePlayComponent
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(LandingRoutes)],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
