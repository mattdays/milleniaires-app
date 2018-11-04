import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { DashboardPage } from '../dashboard/dashboard';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: Facebook,
    private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  login(form: NgForm){
    const loading = this.loadingCtrl.create({
      content:'Signing you in...'
    });
    loading.present();
    console.log(form.value);
    if (form.value.email != "madays@davidson.edu"){
      loading.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Wrong username!',
        buttons: ['Ok']
      });
      alert.present();
    } else if (form.value.password != '0000'){
      loading.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Wrong password!',
        buttons: ['Ok']
      });
      alert.present();
    } else {
      loading.dismiss();
      this.navCtrl.setRoot(DashboardPage);
    }
  }


loginAction(){
    // Login with permissions
    this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
    .then( (res: FacebookLoginResponse) => {

        // The connection was successful
        if(res.status == "connected") {

            // Get user ID and Token
            var fb_id = res.authResponse.userID;
            var fb_token = res.authResponse.accessToken;

            // Get user infos from the API
            this.fb.api("/me?fields=name,gender,birthday,email", []).then((user) => {

                // Get the connected user details
                var gender    = user.gender;
                var birthday  = user.birthday;
                var name      = user.name;
                var email     = user.email;

                console.log("=== USER INFOS ===");
                console.log("Gender : " + gender);
                console.log("Birthday : " + birthday);
                console.log("Name : " + name);
                console.log("Email : " + email);

                // => Open user session and redirect to the next page

            });

        } 
        // An error occurred while loging-in
        else {

            console.log("An error occurred...");

        }

    })
    .catch((e) => {
        console.log('Error logging into Facebook', e);
    });
}

}
