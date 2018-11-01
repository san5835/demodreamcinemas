import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ApiserviceProvider } from '../../providers/apiservice/apiservice';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ApiserviceProvider]
})
export class LoginPage {

  myForm: FormGroup;
  public username;
  public usrpassword;
  public validate;
  public loggedStatus: string;
  public userDetailsobj:any;
  public loggedInfo;
  constructor(public navCtrl: NavController, public navParams: NavParams,fb: FormBuilder,public apservobj:ApiserviceProvider,public loadingCtrl: LoadingController) {

    this.myForm = fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]      
    })
    this.username = this.myForm.controls['email'];
    this.usrpassword = this.myForm.controls['password']; 
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
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
      //console.log(formData);

      let loading = this.loadingCtrl.create({
        content: 'Logging in...'       
     });
     loading.present();
   
    this.loggedInfo = '';
      
      this.apservobj.userlogintoapp(formData).subscribe(
        data => {
          
          let mydataJson:any;
          mydataJson = data;  

          console.log(mydataJson);

          this.loggedStatus = mydataJson.loggedstatus;
          this.userDetailsobj = mydataJson.userdata;
          if(this.loggedStatus == 'success'){

            localStorage.removeItem('loggedstatus');
            localStorage.removeItem('loggeruserdata');           
            //set session value
            localStorage.setItem('loggedstatus', 'logged');
            localStorage.setItem('loggeruserdata', JSON.stringify(this.userDetailsobj));
            this.navCtrl.push(HomePage);
            
          }else{
            this.loggedInfo = 'Username and password do not match or you do not have an account yet.<p class="ca-successmsg-second">Please try again with a different email or password or register for your free account now.';
          }
          loading.dismiss();
                           
        },
        err => loading.dismiss(),
        () => ''
    );


    }




       //console.log(formData);

  }

}
