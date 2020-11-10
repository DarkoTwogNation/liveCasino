import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {SharedModule} from '../../shared/shared.module';
import {BuyCreditsComponent} from './buy-credits/buy-credits.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {FaqComponent} from './faq/faq.component';
import {HomeComponent} from './home/home.component';
import {LeaderBoardsComponent} from './leaderboards/leaderboards.component';
import {LoungeComponent} from './lounge/lounge.component';
import {PromotionsComponent} from './promotions/promotions.component';
import {PromotionsPreviewComponent} from './promotions-preview/promotions-preview.component';
import {SiteMapComponent} from './site-map/site-map.component';
import {SlotsComponent} from './slots/slots.component';
import {SpinWheelComponent} from './spin-wheel/spin-wheel.component';
import {TablesComponent} from './tables/tables.component';
import {TermsComponent} from './terms/terms.component';
import {TournamentsComponent} from './tournaments/tournaments.component';
import {VipComponent} from './vip/vip.component';
import {LandingRoutingModule} from './landing-routing.module';
import {HomeCarouselComponent} from './home/components/home-carousel/home-carousel.component';
import {HomeFeaturedGamesComponent} from './home/components/home-featured-games/home-featured-games.component';
import {HomeLatestWinnersComponent} from './home/components/home-latest-winners/home-latest-winners.component';
import {HomeLeaderboardsComponent} from './home/components/home-leaderboards/home-leaderboards.component';
import {HomeSlotsComponent} from './home/components/home-slots/home-slots.component';
import {HomeSuggestedComponent} from './home/components/home-suggested/home-suggested.component';
import {PromotionsSoloOneComponent} from './promotions/components/promotions-solo-one/promotions-solo-one.component';
import {PromotionsSoloTwoComponent} from './promotions/components/promotions-solo-two/promotions-solo-two.component';
import {TournamentsAllComponent} from './tournaments/components/tournaments-all/tournaments-all.component';
import {TournamentsHelpComponent} from './tournaments/components/tournaments-help/tournaments-help.component';
import {TournamentsHistoryComponent} from './tournaments/components/tournaments-history/tournaments-history.component';
import {TournamentsInviteOnlyComponent} from './tournaments/components/tournaments-invite-only/tournaments-invite-only.component';
import {TournamentsSeeMoreComponent} from './tournaments/components/tournaments-see-more/tournaments-see-more.component';
import {TableSlotChallangeComponent} from '../../components/table-slot-challange/table-slot-challange.component';
import { GameLinesFilter } from '../../_helpers/slots-line-filter';
import { GamePlayComponent } from './game-play/game-play.component';

@NgModule({
    declarations: [
       BuyCreditsComponent,
       ContactUsComponent,
       FaqComponent,
       HomeComponent,
       LeaderBoardsComponent,
       LoungeComponent,
       PromotionsComponent,
       PromotionsPreviewComponent,
       SiteMapComponent,
       SlotsComponent,
       SpinWheelComponent,
       TablesComponent,
       TermsComponent,
       TournamentsComponent,
       VipComponent,
       HomeCarouselComponent,
       HomeFeaturedGamesComponent,
       HomeLatestWinnersComponent,
       HomeLeaderboardsComponent,
       HomeSlotsComponent,
       HomeSuggestedComponent,
       PromotionsSoloOneComponent,
       PromotionsSoloTwoComponent,
       TournamentsAllComponent,
       TournamentsHelpComponent,
       TournamentsHistoryComponent,
       TournamentsInviteOnlyComponent,
       TournamentsSeeMoreComponent,
       TableSlotChallangeComponent,
       GameLinesFilter,
       GamePlayComponent
    ],
    imports: [
        LandingRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
    ],
})
export class LandingModule { }
