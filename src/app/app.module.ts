import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
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
    ExamplepagePage
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
    ExamplepagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
