import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CabBooking } from '../../app/models/cab.booking';
import { CabMatesPage } from '../cab-mates/cab-mates';
import { CabService } from '../../app/service/cab.service';
import { HomePage } from '../home/home';

/**
 * Generated class for the BookingConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-booking-confirmation',
  templateUrl: 'booking-confirmation.html',
})
export class BookingConfirmationPage {

  bookingData= new CabBooking('','','','','');
  routeNum:any;
  empName:any;
  time:any;
  bookingId:any;
  booking:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service:CabService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingConfirmationPage');
    this.routeNum= this.navParams.get('route');
    this.empName = this.navParams.get('employeeName');
    this.time = this.navParams.get('time');
    this.bookingId = this.navParams.get('bookingId');
    console.log("drop point"+this.routeNum);
  }
 
  findMates()
  {
    this.navCtrl.push(CabMatesPage,{bookingId:this.bookingId});
    
  }
  goToHome()
  {

    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }

}
