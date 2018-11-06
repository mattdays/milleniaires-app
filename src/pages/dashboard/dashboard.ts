import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { GroupsPage } from '../groups/groups';
import { ConnectionsPage } from '../connections/connections';
import { AuthService } from '../../services/auth';
import { Http, Response } from '@angular/http';
import firebase from 'firebase';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

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
   myName: string;
  numGroups: number;
  numConnections: number;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private menuCtrl: MenuController, private authService: AuthService, private http: Http) {

  }

  ionViewDidLoad(){
    this.myName = this.authService.getDisplayName();
    console.log(this.http.get("https://ionic2-millenniaires.firebaseio.com/" + this.authService.getActiveUser().uid + '/numGroups'));
    // console.log(this.authService.getActiveUser().uid);
    // firebase.database().ref('users/' + this.authService.getActiveUser().uid).on('value', function(snapshot){
    //   console.log(snapshot.val())
    // })
    // if (this.http.get("https://ionic2-millenniaires.firebaseio.com/" + this.authService.getActiveUser() + '/firstLogin')){
    //   console.log("first login");
    //   console.log(this.http.get("https://ionic2-millenniaires.firebaseio.com/" + this.authService.getActiveUser() + '/firstLogin'));
    // } else{
    //   console.log("not first")
    // }

    this.getNumberConnections();
    this.getNumGroups();
  }

  getNumberConnections(): any{
    // this.authService.getActiveUser().getIdToken().then((token:string) => {
    //   this.assignNumberConnections(token).subscribe(
    //     () => console.log('Success'));
    // })

    // console.log(this.numConnections);
    var myRef = firebase.database().ref('users/' + this.authService.getActiveUser().uid + '/numConnections');
    const preObject = document.getElementById("myNumConnections");
  //   var test = numRef.on('value', function(snapshot) {
  //     var myVal = snapshot.val();
  //     return myVal;

  // });
  //   return firebase.database().ref('users/' + this.authService.getActiveUser().uid + '/numConnections').once('value').then(function(snapshot) {
  //   });

    myRef.on("value", snap => {
      preObject.innerText = JSON.stringify(snap.val(), null, 3) + ' Listings';
    })
  }

  loadPage(page: any){
    this.navCtrl.push(page);
    this.menuCtrl.close();
  }

  registerUser(userId: any){
    var myConnections = [];
    var myGroups = [];
    this.http.put("https://ionic2-millenniaires.firebaseio.com/" + userId + '/numConnections', 0); //put num connections
    this.http.put("https://ionic2-millenniaires.firebaseio.com/" + userId + '/connections', myConnections); //put connections list
    this.http.put("https://ionic2-millenniaires.firebaseio.com/" + userId + '/numGroups', 0); //put num groups
    this.http.put("https://ionic2-millenniaires.firebaseio.com/" + userId + '/groups', myGroups); //put num groups
  } 

  getNumGroups(): any{
    // this.authService.getActiveUser().getIdToken().then((token:string) => {
    //   this.assignNumberConnections(token).subscribe(
    //     () => console.log('Success'));
    // })

    // console.log(this.numConnections);
    var myRef = firebase.database().ref('users/' + this.authService.getActiveUser().uid + '/numGroups');
    const preObject = document.getElementById("myNumGroups");
  //   var test = numRef.on('value', function(snapshot) {
  //     var myVal = snapshot.val();
  //     return myVal;

  // });
  //   return firebase.database().ref('users/' + this.authService.getActiveUser().uid + '/numConnections').once('value').then(function(snapshot) {
  //   });

    myRef.on("value", snap => {
      preObject.innerText = JSON.stringify(snap.val(), null, 3) + ' Connections';
    })
  }



}
