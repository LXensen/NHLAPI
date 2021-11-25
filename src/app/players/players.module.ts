import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';
import { PlayerComponent } from './player/player.component';
@NgModule({
  declarations: [PlayersComponent,
                 PlayerComponent],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    SharedModule
  ]
})
export class PlayersModule { }
