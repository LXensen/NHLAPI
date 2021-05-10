import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraftProspectsComponent } from './draft-prospects.component';

const routes: Routes = [{ path: '', component: DraftProspectsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraftProspectsRoutingModule { }
