import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../../pages/register/register';
import { LoginPage } from '../../pages/login/login';
/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  redirectoregister(){
   this.navCtrl.push(RegisterPage);

  }

  redirectorlogin(){
    this.navCtrl.push(LoginPage);
 
   }

}
