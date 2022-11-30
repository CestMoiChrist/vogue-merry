import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandePageRoutingModule } from './commande-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommandePage } from './commande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandePageRoutingModule,
    SharedModule
  ],
  declarations: [CommandePage]
})
export class CommandePageModule {}
