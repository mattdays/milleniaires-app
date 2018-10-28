import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddGroupPage } from '../add-group/add-group';
import { ExamplepagePage } from '../examplepage/examplepage';

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


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupsPage');
  }

  addGroup(){
    this.navCtrl.push(this.addGroupPage);
  }

  loadPage(){
    this.navCtrl.push(this.examplePage);
  }
}
