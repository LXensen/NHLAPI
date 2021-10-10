import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProspectContainerComponent } from './prospect-container/prospect-container.component';
import { ProspectsComponent } from './prospects.component';

const routes: Routes = [
  { path: '', component: ProspectsComponent },
  { path: ':id', component: ProspectContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProspectsRoutingModule { }
