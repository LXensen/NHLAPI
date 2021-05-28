import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraftComponent } from './draft.component';

const routes: Routes = [
  { path: '', component: DraftComponent },
  { path: ':year', component: DraftComponent },
  { path: ':year/:round', component: DraftComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraftRoutingModule { }
