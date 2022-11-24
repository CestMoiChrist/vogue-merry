import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';

import { RestaurantsPageRoutingModule } from './restaurants-routing.module';

import { RestaurantsPage } from './restaurants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantsPageRoutingModule,
    SharedModule
  ],
  declarations: [RestaurantsPage]
})
export class RestaurantsPageModule {}
