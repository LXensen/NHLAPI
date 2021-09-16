import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamAbbr } from './pipes/team-abbr.pipe';
import { ShortSeasonPipe } from './pipes/short-season.pipe';
import { LocalStorageService } from './services/local-storage.service';
import { SeasonComponent } from './components/season/season.component';

@NgModule({
  declarations: [TeamAbbr, ShortSeasonPipe, LocalStorageService, SeasonComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
