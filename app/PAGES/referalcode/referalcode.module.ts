import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferalcodePageRoutingModule } from './referalcode-routing.module';

import { ReferalcodePage } from './referalcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferalcodePageRoutingModule
  ],
  declarations: [ReferalcodePage]
})
export class ReferalcodePageModule {}
