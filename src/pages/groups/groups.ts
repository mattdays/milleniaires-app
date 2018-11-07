import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddGroupPage } from '../add-group/add-group';
import { ExamplepagePage } from '../examplepage/examplepage';
import { AuthService } from '../../services/auth';
import firebase from 'firebase';
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
  myGroups = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupsPage');
    this.myGroups = [];
    this.myGroups = this.getGroups();
  }

  addGroup(){
    this.navCtrl.push(this.addGroupPage);
  }

  loadPage(){
    this.navCtrl.push(this.examplePage);
  }

  getGroups(){
    
    var myRef = firebase.database().ref('users/' + this.authService.getActiveUser().uid + '/groups');
    var groups = [];
    myRef.on("value", snap => {
      snap.forEach(function(childSnapShot){
        groups.push(childSnapShot.val()['group']);
      })
    });
    
   return groups;
  }
}
