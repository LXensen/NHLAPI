import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProspectsRoutingModule } from './prospects-routing.module';
import { ProspectsComponent } from './prospects.component';


@NgModule({
  declarations: [ProspectsComponent],
  imports: [
    CommonModule,
    ProspectsRoutingModule
  ]
})
export class ProspectsModule { }
