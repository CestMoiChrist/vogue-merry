import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';

import { CategorieProduitPageRoutingModule } from './categorie-produit-routing.module';

import { CategorieProduitPage } from './categorie-produit.page';
import { CategorieProduitService } from '../services/categorie-produit.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorieProduitPageRoutingModule,
    SharedModule
  ],
  declarations: [CategorieProduitPage], providers: [CategorieProduitService]
})
export class CategorieProduitPageModule { }
