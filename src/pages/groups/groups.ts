import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddGroupPage } from '../add-group/add-group';
import { ExamplepagePage } from '../examplepage/examplepage';
import { AuthService } from '../../services/auth';
import { Http, Response } from '@angular/http';
import firebase from 'firebase';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/**
 * Generated class for the GroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {

  addGroupPage = AddGroupPage;

  examplePage = ExamplepagePage;

  myGroups: any;
  myConnections: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService, private http: Http) {
    let myGroupsRef = firebase.database().ref('users/' + this.authService.getActiveUser().uid + '/myGroups');
    let myConnectionsRef = firebase.database().ref('users/' + this.authService.getActiveUser().uid + '/myConnections');

    this.myGroups
  }

  getMyGroups(): any {
    let myGroupsRef = firebase.database().ref('users/' + this.authService.getActiveUser().uid + '/myGroups');
    const preObject = document.getElementById("myNumGroups");
    myGroupsRef.on("value", snap => {
      preObject.innerText = JSON.stringify(snap.val(), null, 3) + ' Connections';
    })
  }

  getMyConnections(): any {
    let myConnectionsRef = firebase.database().ref('users/' + this.authService.getActiveUser().uid + '/myConnections');
    const preObject = document.getElementById("myNumGroups");
    myConnectionsRef.on("value", snap => {
      preObject.innerText = JSON.stringify(snap.val(), null, 3) + ' Connections';
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupsPage');
    this.getMyGroups();
    this.getMyConnections();
  }

  addGroup(){
    this.navCtrl.push(this.addGroupPage);
  }

  loadPage(){
    this.navCtrl.push(this.examplePage);
  }
}
