import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FicheProduitPageRoutingModule } from './fiche-produit-routing.module';

import { FicheProduitPage } from './fiche-produit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FicheProduitPageRoutingModule
  ],
  declarations: [FicheProduitPage]
})
export class FicheProduitPageModule {}
