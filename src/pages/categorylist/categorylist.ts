import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';

/**
 * Generated class for the CategorylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorylist',
  templateUrl: 'categorylist.html',
})
export class CategorylistPage {
   
  public menu;
  constructor(public navCtrl: NavController, public navParams: NavParams,menu: MenuController) {
    this.menu = menu;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategorylistPage');
  }

}
