import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeProduitsPageRoutingModule } from './liste-produits-routing.module';

import { ListeProduitsPage } from './liste-produits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeProduitsPageRoutingModule
  ],
  declarations: [ListeProduitsPage]
})
export class ListeProduitsPageModule {}
