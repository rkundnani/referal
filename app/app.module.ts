import { HTTP } from '@ionic-native/http/ngx';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './api.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule ,IonicModule.forRoot(), AppRoutingModule  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },ApiService,HTTP],
  bootstrap: [AppComponent],
})
export class AppModule {}
