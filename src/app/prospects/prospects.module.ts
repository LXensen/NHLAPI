import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProspectsRoutingModule } from './prospects-routing.module';
import { ProspectsComponent } from './prospects.component';
import { ProspectComponent } from './prospect/prospect.component';


@NgModule({
  declarations: [ProspectsComponent, ProspectComponent],
  imports: [
    CommonModule,
    ProspectsRoutingModule
  ]
})
export class ProspectsModule { }
