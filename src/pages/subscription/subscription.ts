import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { PaymentsuccessPage } from '../../pages/paymentsuccess/paymentsuccess';


/**
 * Generated class for the SubscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subscription',
  templateUrl: 'subscription.html',
  providers: [InAppBrowser]

})
export class SubscriptionPage {

  public subscribplan:any;
  randMaxmimum = 100;
  randMinimum = 1;
  public payretTex = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad SubscriptionPage');
  }

  subsplan(cval){
    this.subscribplan = cval;
    console.log(this.subscribplan);
  }

  getordernumber() {
    return Math.floor(Math.random() * (this.randMaxmimum - this.randMinimum + 1)) + this.randMinimum;
  }

  proceedpayment2(){
    this.navCtrl.push(PaymentsuccessPage,{orderid: 4555,paymentflag : 1});
  }

  proceedtopayment(){

    
    //const browser = this.iab.create(pageContentURL,'_blank','location=yes');
    
    let payscripe = 1;
    if(localStorage.getItem('loggeruserdata') != null){
      let loData  = JSON.parse(localStorage.getItem('loggeruserdata'));   
      let ordernumber = loData.id + 'D'+ this.getordernumber();
      let txtamount = 99;
      if(this.subscribplan == "threemonth"){
          txtamount = 297;
          payscripe = 2;
      }
               
      //this.signText = loData.name;

      var pageContent = '<html><head></head><body><form id="loginForm" action="http://dreamcinemas.in/paytm/patym_paymentprocess.php" method="post">' +
    '<input type="hidden" name="ORDER_ID" value="'+ ordernumber +'">' +
    '<input type="hidden" name="CUST_ID" value="dccus'+ loData.id +'">' +
    '<input type="hidden" name="TXN_AMOUNT" value="'+ txtamount +'">' +
    '<input type="hidden" name="MOBILE_NO" value="9952990223">' +
    '<input type="hidden" name="EMAIL" value="'+  loData.email +'">' +
    '</form> <script type="text/javascript">document.getElementById("loginForm").submit();</script></body></html>';
    var pageContentUrl = 'data:text/html;base64,' + btoa(pageContent);

    var browserRef = this.iab.create(
      pageContentUrl ,
      "_blank",
      "hidden=no,location=no,toolbar=no,clearsessioncache=yes,clearcache=yes"
  );
   
  browserRef.show();


  browserRef.on('loadstop').subscribe(event => {
    //alert(event.url);
    
    //browserRef.insertCSS({ code: "body{color: red;" });
    if(event.url == "http://www.dreamcinemas.in/paytm/paytm_succes.php"){


      this.navCtrl.push(PaymentsuccessPage,{orderid: ordernumber,paymentflag : payscripe});
      browserRef.close();
    }
    //http://www.dreamcinemas.in/paytm/paytm_failed.php
    if(event.url == "http://www.dreamcinemas.in/paytm/paytm_failed.php"){
      this.payretTex = 'Sorry! Your pament got failed. Please try again / try with a new card';
      browserRef.close();
    }
 });


    }
    
    
    


    //browser.executeScript(...);
    
   
    //browser.close();
  }

}
