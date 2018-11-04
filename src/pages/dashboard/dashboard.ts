import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { GroupsPage } from '../groups/groups';
import { ConnectionsPage } from '../connections/connections';
import { AuthService } from '../../services/auth';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})

export class DashboardPage {

  groupsPage = GroupsPage;
  connectionsPage = ConnectionsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private menuCtrl: MenuController, private authService: AuthService) {


  }

  ionViewDidLoad() {
    if(this.authService.firstLogin()){
      console.log("this is my first login");
    } else {
      console.log("I have already logged in");
    }
  }

  loadPage(page: any){
    this.navCtrl.push(page);
    this.menuCtrl.close();
  }

}
