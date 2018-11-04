import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Facebook } from '@ionic-native/facebook';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoadPage } from '../pages/load/load';
import { SigninPage } from '../pages/signin/signin';
import { DashboardPage } from '../pages/dashboard/dashboard';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoadPage,
    SigninPage,
    DashboardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoadPage,
    SigninPage,
    DashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
