import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LandingPage } from '../../pages/landing/landing';


/**
 * Generated class for the MyaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myaccount',
  templateUrl: 'myaccount.html',
})
export class MyaccountPage {

  public loggedname;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.loadProfileName();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MyaccountPage');
  }
  loadProfileName(){

    if(localStorage.getItem('loggeruserdata') != null){
        let loData  = JSON.parse(localStorage.getItem('loggeruserdata')); 
        this.loggedname = loData.name;
         console.log(loData);
        //this.signText = loData.name;
      }

  }

  logout() {  
        
    localStorage.setItem('loggedstatus', 'null');
    localStorage.setItem('loggeruserdata','null');   
    this.navCtrl.push(LandingPage);
    
  }

}
