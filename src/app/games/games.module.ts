import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { GamedetailComponent } from './gamedetail/gamedetail.component';
import { TeamsGameStatComponent } from './teams-game-stat/teams-game-stat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BoxscoreComponent } from './boxscore/boxscore.component';
import { SummaryComponent } from './summary/summary.component';
import { BoxscoredetailComponent } from './boxscoredetail/boxscoredetail.component';


@NgModule({
  declarations: [GamesComponent,
                 ScheduleComponent,
                 GamedetailComponent,
                 TeamsGameStatComponent,
                 BoxscoreComponent,
                 SummaryComponent,
                 BoxscoredetailComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class GamesModule { }
