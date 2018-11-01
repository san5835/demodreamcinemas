import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ApiserviceProvider } from '../../providers/apiservice/apiservice';
import { LoadingController } from 'ionic-angular';
import { DmformvalidationProvider } from '../../providers/dmformvalidation/dmformvalidation';
import { LoginPage } from '../../pages/login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [ApiserviceProvider,DmformvalidationProvider]
})
export class RegisterPage {

  myForm: FormGroup;
  public uname;
  public usrpassword;
  public usrphone;
  public usremail;
  public validate;
  public loggedInfo;
  public regissuccess: any;
  public headtext: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,fb: FormBuilder,public loadingCtrl: LoadingController,public apservobj:ApiserviceProvider) {

    this.headtext = "Create new account";
    this.myForm = fb.group({
      'uname': ['', Validators.required],
      'uemail': ['', Validators.compose([Validators.required,DmformvalidationProvider.emailValidator])],
      'uphone': ['', Validators.required],
      'usrpassword': ['', Validators.required]      
    })
    this.uname = this.myForm.controls['uname'];
    this.usremail = this.myForm.controls['uemail'];
    this.usrphone = this.myForm.controls['uphone'];
    this.usrpassword = this.myForm.controls['usrpassword']; 
  
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad RegisterPage');
  }

  redirectologin(){
       this.navCtrl.push(LoginPage);
  }

  onSubmit(formData) { 

    if(this.myForm.invalid){
      this.validate="";
     // console.log('invalidForm');
    }
    else {
       var frmnewdata = {
          email: formData.uemail,
          name: formData.uname,
          password: formData.usrpassword,
          c_password: formData.usrpassword,
          phone: formData.uphone
       }
      //console.log(frmnewdata);
      let loading = this.loadingCtrl.create({
        content: 'Processsing your request ...'       
     });
     loading.present();


     this.apservobj.userregistration(frmnewdata).subscribe(
      data => {
        
        let mydataJson:any;
        let restatus: any;
        mydataJson = data;  
       
        restatus = mydataJson.regstatus;
        if(restatus == 'success'){
          this.regissuccess = 1;
          this.headtext = "Thank you!";
         // this.loggedInfo = 'registration successful. ';
          //console.log('Registration sucessful');
          loading.dismiss();
         // this.navCtrl.push(LoginPage,{refrom: 'registration'});
          //loading.dismiss();
          
        }else{
          this.loggedInfo = 'Thers is problem with your registeration. Please try again or contact administrator';
          loading.dismiss();
        }
        
                         
      },
      err => loading.dismiss(),
      () => ''
  );





    }

  }

}
