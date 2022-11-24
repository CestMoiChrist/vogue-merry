import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListRecettePage } from './list-recette.page';

const routes: Routes = [
  {
    path: '',
    component: ListRecettePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRecettePageRoutingModule {}
