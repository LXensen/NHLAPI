import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProspectsRoutingModule } from './prospects-routing.module';
import { ProspectsComponent } from './prospects.component';
import { ProspectComponent } from './prospect/prospect.component';
import { ProspectContainerComponent } from './prospect-container/prospect-container.component';


@NgModule({
  declarations: [ProspectsComponent, ProspectComponent, ProspectContainerComponent],
  imports: [
    CommonModule,
    ProspectsRoutingModule
  ]
})
export class ProspectsModule { }
