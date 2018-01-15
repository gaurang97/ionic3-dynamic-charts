import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {ChartsPage} from '../pages/charts/charts'

import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    MyApp,
  ChartsPage
  ],
  imports: [
    BrowserModule,
   
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChartsPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
   
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
    
  ]
})
export class AppModule {}
