import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListRecettePageRoutingModule } from './list-recette-routing.module';

import { ListRecettePage } from './list-recette.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListRecettePageRoutingModule
  ],
  declarations: [ListRecettePage]
})
export class ListRecettePageModule {}
