import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { IonicModule } from '@ionic/angular';

import { BateauxPageRoutingModule } from './bateaux-routing.module';

import { BateauxPage } from './bateaux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateauxPageRoutingModule,
    SharedModule,
  ],
  declarations: [BateauxPage]
})
export class BateauxPageModule {}
