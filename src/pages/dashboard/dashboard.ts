import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { GroupsPage } from '../groups/groups';
import { ConnectionsPage } from '../connections/connections';

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
    private menuCtrl: MenuController) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  loadPage(page: any){
    this.navCtrl.push(page);
    this.menuCtrl.close();
  }

}
