import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProspectComponent } from './prospect/prospect.component';
import { ProspectsComponent } from './prospects.component';

const routes: Routes = [
  { path: '', component: ProspectsComponent },
  { path: ':id', component: ProspectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProspectsRoutingModule { }
