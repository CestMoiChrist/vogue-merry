import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';

import { ListRecettePageRoutingModule } from './list-recette-routing.module';

import { ListRecettePage } from './list-recette.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListRecettePageRoutingModule,
    SharedModule
  ],
  declarations: [ListRecettePage]
})
export class ListRecettePageModule {}
