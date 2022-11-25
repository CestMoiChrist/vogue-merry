import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';

import { SingleBateauPageRoutingModule } from './single-bateau-routing.module';

import { SingleBateauPage } from './single-bateau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleBateauPageRoutingModule,
    SharedModule
  ],
  declarations: [SingleBateauPage]
})
export class SingleBateauPageModule {}
