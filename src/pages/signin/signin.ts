import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { DashboardPage } from '../dashboard/dashboard';
import firebase from 'firebase';
import { SignupPage } from '../signup/signup';
import { AuthService } from '../../services/auth';
import { Http } from '@angular/http';
//import {Facebook} from "@ionic-native/facebook";


/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController, private loadingCtrl: LoadingController,
    private authService: AuthService, private http: Http) {
  }


  login(form: NgForm){
    const loading = this.loadingCtrl.create({
      content: "Sign you in to be a milleniaire..."
    });
    loading.present();

    this.authService.signin(form.value.email, form.value.password).
    then(data => {
      loading.dismiss();
      this.navCtrl.setRoot(DashboardPage);
    })
    .catch(error => {
      loading.dismiss();
      console.log(error);
      const alert = this.alertCtrl.create({
        title: 'Signin failed!',
        message: error.message,
        buttons: ['Ok']
      });
      alert.present();
    });
    }

    changeSignupPage(){
      this.navCtrl.push(SignupPage);
    }

  // loginFacebook(){
  //   // let provider = new firebase.auth.FacebookAuthProvider();
  //   // firebase.auth().signInWithRedirect(provider).then(() => {
  //   //   firebase.auth().getRedirectResult().then((result) => {
  //   //     alert(JSON.stringify(result));
  //   //   }).catch(function(error) {
  //   //     alert(JSON.stringify(error))
  //   //   });
  //   // });

  //   this.facebookCtrl.login(["email"]).then(suc => {

  //     let credential = firebase.auth.FacebookAuthProvider.credential(suc.authResponse.accessToken);
  //     firebase.auth().signInWithCredential(credential).then((info) => {
  //       alert(JSON.stringify(info));
  //     })
  //   })
  // }
  registerUser(userId: any){
    var myConnections = [];
    var myGroups = [];
    this.http.put("https://ionic2-millenniaires.firebaseio.com/" + userId + '/numConnections', 0); //put num connections
    this.http.put("https://ionic2-millenniaires.firebaseio.com/" + userId + '/connections', myConnections); //put connections list
    this.http.put("https://ionic2-millenniaires.firebaseio.com/" + userId + '/numGroups', 0); //put num groups
    this.http.put("https://ionic2-millenniaires.firebaseio.com/" + userId + '/groups', myGroups); //put num groups
}

}
