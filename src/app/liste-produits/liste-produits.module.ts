import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';

import { ListeProduitsPageRoutingModule } from './liste-produits-routing.module';

import { ListeProduitsPage } from './liste-produits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeProduitsPageRoutingModule,
    SharedModule
  ],
  declarations: [ListeProduitsPage]
})
export class ListeProduitsPageModule {}
