import { TeamRosterComponent } from './team-roster/team-roster.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams.component';

const routes: Routes = [
  { path: '', component: TeamsComponent },
  { path: ':id/roster', component: TeamDetailComponent },
  { path: ':id/roster/:season', component: TeamDetailComponent },
  { path: ':id/schedule', component: TeamDetailComponent },
  { path: ':id/schedule/:season', component: TeamDetailComponent },
  { path: ':id', component: TeamDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
