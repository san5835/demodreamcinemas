import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiserviceProvider {

  appversionno:any;
  apiRequestURL: string;
  siteURL: string;
  apiurl: string;
  siteMediaEBURL: string;
  apiPostURL: string;
  randMaxmimum = 100;
  randMinimum = 1
  constructor(public http: HttpClient) {
    //console.log('Hello ApiserviceProvider Provider');
    this.apiurl = "http://portal.dreamcinemas.in/api";
  }

  userlogintoapp(usrpostData){    
    let repos = this.http.post(this.apiurl + '/login',usrpostData);
     return repos; 
   }

   userregistration(usrpostData){    
    let repos = this.http.post(this.apiurl + '/register',usrpostData);
     return repos; 
   }

   gethomemedia(){    
    let repos = this.http.get(this.apiurl + '/getmediahome');
     return repos; 
   }

   updategiftinfor(usrpostData){    
    let repos = this.http.post(this.apiurl + '/usergift',usrpostData);
     return repos; 
   }

   getgeneralmedia(){    
    let repos = this.http.get(this.apiurl + '/getmedia');
     return repos; 
   }

}
