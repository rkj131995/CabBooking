import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from "../pages/about/about";
import { BookingPage } from '../pages/booking/booking';
import { TodaysBookingPage } from '../pages/todays-booking/todays-booking';
import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  splash=true;
  activePage:any;

  pages: Array<{title: string, component: any,icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, smartAudio:SmartAudioProvider) {
    this.initializeApp();
    smartAudio.preload('tabSwitch', 'assets/audio/clickSound.mp3');

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage , icon:"home"},
      { title: 'Book My Ride', component: BookingPage, icon:"play" },
      { title: 'Current Bookings', component: TodaysBookingPage , icon:"paper"},
      { title: 'About us', component: AboutPage , icon:"information-circle"},
      
      
    ];
    this.activePage = HomePage;

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      setTimeout(() => this.splash = false, 3500);
      this.splashScreen.hide();
      
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage = page;
    
      
    
  }
  checkActive(p)
  {
    return this.activePage == p;
    
  }
}
