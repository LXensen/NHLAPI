import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamAbbrPipe } from './pipes/team-abbr.pipe';
import { ShortSeasonPipe } from './pipes/short-season.pipe';



@NgModule({
  declarations: [TeamAbbrPipe, ShortSeasonPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
