import { Component,ViewChild } from '@angular/core';
import { NavController,MenuController,Slides } from 'ionic-angular';
import { SubscriptionPage } from '../../pages/subscription/subscription';
import { NativeAudio } from '@ionic-native/native-audio';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media';
import { ApiserviceProvider } from '../../providers/apiservice/apiservice';
import { MedialistPage } from '../../pages/medialist/medialist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [NativeAudio,StreamingMedia,ApiserviceProvider]
})
export class HomePage {
  pet: string = "latest";
  @ViewChild(Slides) slides: Slides;
  public homesongs;
  public homevideo;
  public hometrailers;
  public subscribestatus:any;

  public menu;
  constructor(public navCtrl: NavController, menu: MenuController,private nativeAudio: NativeAudio,private streamingMedia: StreamingMedia,public apservobj:ApiserviceProvider) {    
    this.menu = menu;
    //this.nativeAudio.preloadSimple('uniqueId1', 'http://dreamcinemas.in/songs/demo1.mp3').then(this.onSuccess, this.onError);
    if(localStorage.getItem('loggedstatus') == "logged"){
      let loData  = JSON.parse(localStorage.getItem('loggeruserdata')); 
      if(loData){
        this.subscribestatus = loData.subscription;
      }

   }
    
    this.gethomemediadata();
  }

  subscription(){
    this.navCtrl.push(SubscriptionPage);
   }

   onSuccess(){

   }

   onError(){

   }

   redirectomediapage(mflag){
     this.navCtrl.push(MedialistPage,{tabflag: mflag });
   }

  playaudio()
{
  this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));
}
  ngAfterViewInit() {
    this.slides.autoplay = 6000;
    this.slides.loop = true;
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
    
    this.apservobj.gethomemedia().subscribe(
      data => {
        
        let mydataJson:any;
        mydataJson = data;  
        if(mydataJson){
          this.homesongs = mydataJson.mediaaudio;
          this.homevideo = mydataJson.mediavideo;
          this.hometrailers = mydataJson.mediatrailler;
        }       
        //console.log(mydataJson);              
      },
      err => '',
      () => ''
  );
  }

}
