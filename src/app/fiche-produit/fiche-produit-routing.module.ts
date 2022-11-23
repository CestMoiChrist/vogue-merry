import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FicheProduitPage } from './fiche-produit.page';

const routes: Routes = [
  {
    path: '',
    component: FicheProduitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FicheProduitPageRoutingModule {}
