import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KostasPageRoutingModule } from './kostas-routing.module';

import { KostasPage } from './kostas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KostasPageRoutingModule
  ],
  declarations: [KostasPage]
})
export class KostasPageModule {}
