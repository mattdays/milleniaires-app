import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { LoadPage } from '../pages/load/load';
import { DashboardPage } from '../pages/dashboard/dashboard';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoadPage;
  // rootPage:any = DashboardPage;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
