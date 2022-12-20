import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobileOTPPageRoutingModule } from './mobile-otp-routing.module';

import { MobileOTPPage } from './mobile-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobileOTPPageRoutingModule
  ],
  declarations: [MobileOTPPage]
})
export class MobileOTPPageModule {}
