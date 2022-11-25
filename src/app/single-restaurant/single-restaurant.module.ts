import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';

import { SingleRestaurantPageRoutingModule } from './single-restaurant-routing.module';

import { SingleRestaurantPage } from './single-restaurant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleRestaurantPageRoutingModule,
    SharedModule
  ],
  declarations: [SingleRestaurantPage]
})
export class SingleRestaurantPageModule {}
