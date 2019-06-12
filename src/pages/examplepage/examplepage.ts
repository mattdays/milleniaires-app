import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProposeDecisionPage } from '../propose-decision/propose-decision';

/**
 * Generated class for the ExamplepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-examplepage',
  templateUrl: 'examplepage.html',
})
export class ExamplepagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamplepagePage');
  }

  proposeDecision(){
    this.navCtrl.push(ProposeDecisionPage);
  }

}
