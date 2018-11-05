import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { LoadPage } from '../pages/load/load';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { SigninPage } from '../pages/signin/signin';
import { AddGroupPage } from '../pages/add-group/add-group';
import { GroupsPage } from '../pages/groups/groups';
import { SignupPage } from '../pages/signup/signup';
import { AuthService } from '../services/auth';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoadPage;
  //rootPage:any = DashboardPage;
  tabsPage = DashboardPage;
  addGroupPage = AddGroupPage;
  groupsPage = GroupsPage;
  signinPage = SigninPage;
  signupPage = SignupPage;

  @ViewChild('nav') nav: NavController;
  isAuthenticated = false;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private authService:AuthService, private menuCtrl: MenuController, private loadCtrl: LoadingController) {
      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
        
    //   } else {
    //     this.isAuthenticated = false;
    //     this.nav.setRoot(SigninPage);
    //   }
    // });
  }

  onload(page: any){
    this.nav.push(this.tabsPage);
  }

  logOut(){
    const loading = this.loadCtrl.create({
      content: "Sign you out..."
    });
    loading.present();
    this.authService.logOut();
    this.menuCtrl.close();
    this.nav.setRoot(this.signinPage);
    loading.dismiss();
  }
}

