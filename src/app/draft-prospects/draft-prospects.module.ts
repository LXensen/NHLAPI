import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraftProspectsRoutingModule } from './draft-prospects-routing.module';
import { DraftProspectsComponent } from './draft-prospects.component';
import { ProspectComponent } from './prospect/prospect.component';


@NgModule({
  declarations: [DraftProspectsComponent, ProspectComponent],
  imports: [
    CommonModule,
    DraftProspectsRoutingModule
  ]
})
export class DraftProspectsModule { }
