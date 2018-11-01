import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { ApiserviceProvider } from '../../providers/apiservice/apiservice';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the PaymentsuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paymentsuccess',
  templateUrl: 'paymentsuccess.html',
})
export class PaymentsuccessPage {

  myForm: FormGroup;
  public userperf;
  public usraddress;
  public validate;
  public ornumber: any;
  public payflag: any;
  constructor(public navCtrl: NavController,public apservobj:ApiserviceProvider, public navParams: NavParams,fb: FormBuilder,public loadingCtrl: LoadingController) {

    this.ornumber = navParams.get('orderid');
    this.payflag = navParams.get('paymentflag');
 console.log(this.payflag );

    this.myForm = fb.group({
      'userpref': ['', Validators.required],
      'useraddress': ['', Validators.required]      
    })
    this.userperf = this.myForm.controls['userpref'];
    this.usraddress = this.myForm.controls['useraddress']; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentsuccessPage');
  }

  redirectohome(){    
    this.navCtrl.push(HomePage);
  }

  onSubmit(formData) {

    if(this.myForm.invalid){
      this.validate="";
     // console.log('invalidForm');
    }
    else {
      let loData:any;
      if(localStorage.getItem('loggeruserdata') != null){
         loData  = JSON.parse(localStorage.getItem('loggeruserdata'));          
        }

         let posdata = {
          user_id: loData.id,
          email: loData.email,
          transaction_id: this.ornumber,
          address: formData.useraddress,
          user_preference:  formData.userpref,

         }

         let loading = this.loadingCtrl.create({
          content: 'Logging in...'       
       });
       loading.present();

         this.apservobj.updategiftinfor(posdata).subscribe(
          data => {
            
            let mydataJson:any;
            mydataJson = data;  
            //console.log(mydataJson);
            this.navCtrl.push(HomePage);
            loading.dismiss();
                             
          },
          err => loading.dismiss(),
          () => ''
      );

        

    }
  }

}
