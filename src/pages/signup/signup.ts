import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Http } from '@angular/http';
import firebase from 'firebase';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authService:AuthService, private http: Http ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  onSignup(form: NgForm){
    this.authService.signup(form.value.email, form.value.password, form.value.name, form.value.surname);
  }

  registerUser(userId: any){
    var myConnections = [];
    var myGroups = [];
    this.http.put("https://ionic2-millenniaires.firebaseio.com/" + userId + '/numConnections', 0); //put num connections
    this.http.put("https://ionic2-millenniaires.firebaseio.com/" + userId + '/connections', myConnections); //put connections list
    this.http.put("https://ionic2-millenniaires.firebaseio.com/" + userId + '/numGroups', 0); //put num groups
    this.http.put("https://ionic2-millenniaires.firebaseio.com/" + userId + '/groups', myGroups); //put num groups
}

}