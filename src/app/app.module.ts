import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LandingPage } from '../pages/landing/landing';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { CategorylistPage } from '../pages/categorylist/categorylist';
import { SubscriptionPage } from '../pages/subscription/subscription';


import { ReferPage } from '../pages/refer/refer';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { MyaccountPage } from '../pages/myaccount/myaccount';
import { WatchlistPage } from '../pages/watchlist/watchlist';
import { NotificationPage } from '../pages/notification/notification';
import { OfflinevideosPage } from '../pages/offlinevideos/offlinevideos';
import { PaymentsuccessPage } from '../pages/paymentsuccess/paymentsuccess';
import { MedialistPage } from '../pages/medialist/medialist';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiserviceProvider } from '../providers/apiservice/apiservice';
import { DmformvalidationProvider } from '../providers/dmformvalidation/dmformvalidation';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LandingPage,
    RegisterPage,
    LoginPage,
    CategorylistPage,
    ReferPage,
    AboutusPage,
    MyaccountPage,
    WatchlistPage,
    NotificationPage,
    OfflinevideosPage,
    SubscriptionPage,
    PaymentsuccessPage,
    MedialistPage

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LandingPage,
    RegisterPage,
    LoginPage,
    CategorylistPage,
    ReferPage,
    AboutusPage,
    MyaccountPage,
    WatchlistPage,
    NotificationPage,
    OfflinevideosPage,
    SubscriptionPage,
    PaymentsuccessPage,
    MedialistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiserviceProvider,
    DmformvalidationProvider
  ]
})
export class AppModule {}
