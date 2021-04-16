import { ShortSeasonPipe } from './../shared/pipes/short-season.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';
import { PlayerComponent } from './player/player.component';


@NgModule({
  declarations: [PlayersComponent,
                 ShortSeasonPipe,
                 PlayerComponent],
  imports: [
    CommonModule,
    PlayersRoutingModule
  ]
})
export class PlayersModule { }
