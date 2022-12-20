import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'mobile',
    loadChildren: () => import('./PAGES/mobile/mobile.module').then( m => m.MobilePageModule)
  },
  {
    path: 'mobile/:id',
    loadChildren: () => import('./PAGES/mobile-otp/mobile-otp.module').then( m => m.MobileOTPPageModule)
  },
  {
    path: 'email',
    loadChildren: () => import('./PAGES/email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'login/:id',
    loadChildren: () => import('./PAGES/email-otp/email-otp.module').then( m => m.EmailOtpPageModule)
  },
  {
    path: 'final/:id',
    loadChildren: () => import('./PAGES/final/final.module').then( m => m.FinalPageModule)
  },
  {
    path: 'congratulations/:id',
    loadChildren: () => import('./PAGES/congratulations/congratulations.module').then( m => m.CongratulationsPageModule)
  },
  {
    path: 'register/:id',
    loadChildren: () => import('./PAGES/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'referalcode/:id',
    loadChildren: () => import('./PAGES/referalcode/referalcode.module').then( m => m.ReferalcodePageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./PAGES/verify/verify.module').then( m => m.VerifyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
