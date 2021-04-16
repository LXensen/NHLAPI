import { TeamRosterComponent } from './team-roster/team-roster.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams.component';

const routes: Routes = [
  { path: '', component: TeamsComponent },
  { path: ':id', component: TeamDetailComponent },
  { path: ':id/', component: TeamRosterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
