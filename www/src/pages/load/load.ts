import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { SigninPage } from '../signin/signin';

/**
 * Generated class for the LoadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-load',
  templateUrl: 'load.html',
})
export class LoadPage {

  signupPage = SigninPage;

  constructor(private navController: NavController){
  }

  timer = setTimeout(() => {this.navController.push(SigninPage)}, 5000);

}
