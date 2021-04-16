import { TeamAbbr } from './../shared/pipes/team-abbr.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { GamedetailComponent } from './gamedetail/gamedetail.component';
import { TeamsGameStatComponent } from './teams-game-stat/teams-game-stat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BoxscoreComponent } from './boxscore/boxscore.component';
import { SummaryComponent } from './summary/summary.component';


@NgModule({
  declarations: [GamesComponent,
                 ScheduleComponent,
                 TeamAbbr,
                 GamedetailComponent,
                 TeamsGameStatComponent,
                 BoxscoreComponent,
                 SummaryComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    NgbModule
  ]
})
export class GamesModule { }
