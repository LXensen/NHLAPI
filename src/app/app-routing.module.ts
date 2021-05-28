import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'schedule', pathMatch: 'full'},
  { path: 'players', loadChildren: () => import('./players/players.module').then(m => m.PlayersModule) },
  { path: 'teams', loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule) },
  { path: 'games', loadChildren: () => import('./games/games.module').then(m => m.GamesModule) },
  { path: 'draft', loadChildren: () => import('./draft/draft.module').then(m => m.DraftModule) },
  { path: 'prospects', loadChildren: () => import('./prospects/prospects.module').then(m => m.ProspectsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
