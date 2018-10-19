import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BookingPage } from '../pages/booking/booking';
import { BookingConfirmationPage } from "../pages/booking-confirmation/booking-confirmation";
import { CabMatesPage } from "../pages/cab-mates/cab-mates";
import { TodaysBookingPage } from "../pages/todays-booking/todays-booking";
import { CabService } from "./service/cab.service";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BookingFilterPipe } from '../pipes/booking-filter/booking-filter';
import { AboutPage } from '../pages/about/about';
import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';
import { NativeAudio } from '@ionic-native/native-audio';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookingPage,
    TodaysBookingPage,
    BookingConfirmationPage,
    CabMatesPage,
    BookingFilterPipe,
    AboutPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    NguiAutoCompleteModule,
    SelectSearchableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookingPage,
    TodaysBookingPage,
    BookingConfirmationPage,
    CabMatesPage,
    AboutPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CabService,
    SmartAudioProvider,
    NativeAudio
  ]
})
export class AppModule {}
