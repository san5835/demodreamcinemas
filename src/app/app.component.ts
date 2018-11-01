import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';
import { LandingPage } from '../pages/landing/landing';
import { CategorylistPage } from '../pages/categorylist/categorylist';
import {enableProdMode} from "@angular/core";

import { HomePage } from '../pages/home/home';
import { ReferPage } from '../pages/refer/refer';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { MyaccountPage } from '../pages/myaccount/myaccount';
import { WatchlistPage } from '../pages/watchlist/watchlist';
import { NotificationPage } from '../pages/notification/notification';
import { OfflinevideosPage } from '../pages/offlinevideos/offlinevideos';

enableProdMode();

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  @ViewChild(Nav) nav: Nav;
  public loggedStatus;

  constructor(platform: Platform, public menuCtrl: MenuController, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.


      if(localStorage.getItem('loggedstatus') == "logged"){
        this.loggedStatus  = localStorage.getItem('loggedstatus');   
        this.rootPage =  HomePage;

     }else{          
        this.loggedStatus = 'null';
        this.rootPage =  LandingPage;
        
        
  }




      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  redregister() {
    this.menuCtrl.close();
    this.nav.push(LandingPage);
  }
  categorylist() {
    this.menuCtrl.close();
    this.nav.push(CategorylistPage);
  }

  redirectohome(){
    this.menuCtrl.close();
    this.nav.push(HomePage);
  }

  redirectrefer(){
    this.menuCtrl.close();
    this.nav.push(ReferPage);
  }

  redirectmyacc(){
    this.menuCtrl.close();
    this.nav.push(MyaccountPage);
  }


  redirectwatch(){
    this.menuCtrl.close();
    this.nav.push(WatchlistPage);
  }

  redirecofflinevideo(){
    this.menuCtrl.close();
    this.nav.push(OfflinevideosPage);
  }

  redirectnotification(){
    this.menuCtrl.close();
    this.nav.push(NotificationPage);
  }

  redirectoaboutus(){
    this.menuCtrl.close();
    this.nav.push(AboutusPage);
  }

  logout() {  
    this.loggedStatus = "null";        
    localStorage.setItem('loggedstatus', 'null');
    localStorage.setItem('loggeruserdata','null');   
    this.nav.push(LandingPage);
    
  }

}
