import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth';
import { NgForm } from '@angular/forms';
import firebase from 'firebase';
import { Http } from '@angular/http';

/**
 * Generated class for the AddGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-group',
  templateUrl: 'add-group.html',
})
export class AddGroupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authService: AuthService, private http: Http ) {
  }

  // addGroup(form: NgForm){
  //   var myUser = this.authService.getActiveUser().uid; //get my user
  //   var myGroup = form.value.groupTitle;
  //   var myRef = firebase.database().ref('users/' + this.authService.getActiveUser().uid + '/groups');
  // //   var test = numRef.on('value', function(snapshot) {
  // //     var myVal = snapshot.val();
  // //     return myVal;

  // // });
  // //   return firebase.database().ref('users/' + this.authService.getActiveUser().uid + '/numConnections').once('value').then(function(snapshot) {
  // //   });

  //   myRef.on("value", snap => {
  //     if(JSON.stringify(snap.val(), null, 3) == null){
  //       var emptyList = [];
  //       emptyList.push(myGroup);
  //       this.http.put("https://ionic2-millenniaires.firebaseio.com/" + myUser + '/groups', emptyList); //put num connections
  //     } else {
  //       var myList = JSON.stringify(snap.val(), null, 3);
  //     }
  //   })

  // }

  addGroup(form: NgForm){
    var groupRef = firebase.database().ref('users/groups');
    var myRef = firebase.database().ref('users/' + this.authService.getActiveUser().uid + '/groups');
    var newChildRef = myRef.push();
    var newGroupRef = groupRef.push();
    newChildRef.set({group: form.value.groupTitle});
    newGroupRef.set({group: form.value.groupTitle});
  }
  
  
}

