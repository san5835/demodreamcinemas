import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { ApiserviceProvider } from '../../providers/apiservice/apiservice';
import { HomePage } from '../../pages/home/home';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media';
/**
 * Generated class for the MedialistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medialist',
  templateUrl: 'medialist.html',
  providers: [StreamingMedia,ApiserviceProvider]
})
export class MedialistPage {

  pet: string = "audiosongs";
  public homesongs;
  public homevideo;
  public hometrailers;
  public subscribestatus:any;
  public menu;
  public loadIcoflag = 1;

  constructor(public navCtrl: NavController,private streamingMedia: StreamingMedia,  menu: MenuController,public navParams: NavParams,public apservobj:ApiserviceProvider) {

    this.menu = menu;

    this.pet = navParams.get('tabflag');

    //this.nativeAudio.preloadSimple('uniqueId1', 'http://dreamcinemas.in/songs/demo1.mp3').then(this.onSuccess, this.onError);
    if(localStorage.getItem('loggedstatus') == "logged"){
      let loData  = JSON.parse(localStorage.getItem('loggeruserdata')); 
      if(loData){
        this.subscribestatus = loData.subscription;
      }

   }
    this.gethomemediadata();
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad MedialistPage');
  }

  redirectohome(){    
    this.navCtrl.push(HomePage);
  }

  startAudio(adata) {
    let options: StreamingAudioOptions = {
      successCallback: () => { console.log('Finished Audio') },
      errorCallback: (e) => { console.log('Error: ', e) },
      bgImage: adata.media_thumb,
      bgImageScale: 'fit',
      initFullscreen: false // iOS only!
    };
 
    //http://soundbible.com/2196-Baby-Music-Box.html
    this.streamingMedia.playAudio(adata.media_url, options);
  }

  startVideo(adata) {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'landscape',
      shouldAutoClose: true, 
      controls: true     
    };
 
    // http://www.sample-videos.com/
    this.streamingMedia.playVideo(adata.media_url, options);
  }

  gethomemediadata(){
    
    this.apservobj.getgeneralmedia().subscribe(
      data => {
        
        let mydataJson:any;
        mydataJson = data;  
        if(mydataJson){
          this.loadIcoflag = 0;
          this.homesongs = mydataJson.mediaaudio;
          this.homevideo = mydataJson.mediavideo;
          this.hometrailers = mydataJson.mediatrailler;
        }       
        //console.log(mydataJson);              
      },
      err => this.loadIcoflag = 0,
      () => this.loadIcoflag = 0
  );
  }

}
