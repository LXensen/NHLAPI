import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamRosterComponent } from './team-roster/team-roster.component';
import { NgbdSortableHeader, TeamStatsComponent } from './team-stats/team-stats.component';
import { TeamScheduleComponent } from './team-schedule/team-schedule.component';
import { TeamDetailCardComponent } from './team-detail-card/team-detail-card.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [TeamsComponent,
                 TeamsListComponent,
                 TeamDetailComponent,
                 TeamRosterComponent,
                 TeamStatsComponent,
                 TeamScheduleComponent,
                 NgbdSortableHeader,
                 TeamDetailCardComponent],
  imports: [
    NgbModule,
    CommonModule,
    TeamsRoutingModule,
    SharedModule
  ]
})
export class TeamsModule { }
