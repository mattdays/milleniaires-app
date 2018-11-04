import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Config } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoadPage } from '../pages/load/load';
import { SigninPage } from '../pages/signin/signin';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { GroupsPage } from '../pages/groups/groups';
import { ConnectionsPage } from '../pages/connections/connections';
import { AddGroupPage } from '../pages/add-group/add-group';
import { ExamplepagePage } from '../pages/examplepage/examplepage';
import {Facebook} from "@ionic-native/facebook";
import firebase from 'firebase';
import { SignupPage } from '../pages/signup/signup';
import { AuthService } from '../services/auth';

export const firebaseConfig={
  apiKey: "AIzaSyAbeLYe8obSBUkCXPqkg38bG2NPOkjA168",
  authDomain: "ionic2-millenniaires.firebaseapp.com",
  databaseURL: "https://ionic2-millenniaires.firebaseio.com",
  projectId: "ionic2-millenniaires",
  storageBucket: "ionic2-millenniaires.appspot.com",
  messagingSenderId: "337248717211"
}

firebase.initializeApp(firebaseConfig);

// firebase.initializeApp({
//   apiKey: "AIzaSyAbeLYe8obSBUkCXPqkg38bG2NPOkjA168",
//   authDomain: "ionic2-millenniaires.firebaseapp.com",
//   databaseURL: "https://ionic2-millenniaires.firebaseio.com",
//   projectId: "ionic2-millenniaires",
//   storageBucket: "ionic2-millenniaires.appspot.com",
//   messagingSenderId: "337248717211"
// });

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoadPage,
    SigninPage,
    DashboardPage,
    GroupsPage,
    ConnectionsPage,
    AddGroupPage,
    ExamplepagePage,
    SignupPage
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
    DashboardPage,
    GroupsPage,
    ConnectionsPage,
    AddGroupPage,
    ExamplepagePage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
