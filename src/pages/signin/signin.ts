import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { DashboardPage } from '../dashboard/dashboard';

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

}
