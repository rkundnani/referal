import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobileOTPPage } from './mobile-otp.page';

const routes: Routes = [
  {
    path: '',
    component: MobileOTPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileOTPPageRoutingModule {}
