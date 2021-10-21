import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProspectContainerComponent } from '../prospects/prospect-container/prospect-container.component';
import { DraftComponent } from './draft.component';

const routes: Routes = [
  { path: '', component: DraftComponent},
  { path: 'prospects/:id', component: ProspectContainerComponent},
  { path: ':year', component: DraftComponent},
  { path: ':year/:round', component: DraftComponent },
  { path: ':year/:round/prospects/:id', component: ProspectContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraftRoutingModule { }
