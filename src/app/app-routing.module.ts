import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'schedule', pathMatch: 'full'},
  { path: 'players', loadChildren: () => import('./players/players.module').then(m => m.PlayersModule) },
  { path: 'teams', loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule) },
  { path: 'games', loadChildren: () => import('./games/games.module').then(m => m.GamesModule) },
  { path: 'prospects', loadChildren: () => import('./draft-prospects/draft-prospects.module').then(m => m.DraftProspectsModule) },
  { path: 'draft', loadChildren: () => import('./draft-prospects/draft-prospects.module').then(m => m.DraftProspectsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
