import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeProduitsPage } from './liste-produits.page';

const routes: Routes = [
  {
    path: '',
    component: ListeProduitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeProduitsPageRoutingModule {}
