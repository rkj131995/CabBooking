import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CabService } from '../../app/service/cab.service';
import { HomePage } from '../home/home';

/**
 * Generated class for the TodaysBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-todays-booking',
  templateUrl: 'todays-booking.html'
  
  
})
export class TodaysBookingPage {
  bookingData:any;
  todaysDate :any = new Date();
  timings : any = [
    {
      "id": 12,
      "name": "8:30",
      
    },
    {
      "id": 129,
      "name": "10:00",
     
    }
  ];
  routes : any = [
    {
      "id": 1,
      "name": "A",
      "description": "Richmond Circle, Market Flyover, Gowripalaya, Moodalapalya, Pattegarpalya",
      "destination": "VIJAYANAGARA"
    },
    {
      "id": 19,
      "name": "B",
      "description": "Market Flyover, Goripalya, Chandra Layout, Mariyannapalya",
      "destination": "NAGRABHAVI"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service:CabService) {
    this.service.getBookings().subscribe(response => { this.bookingData = response });
    console.log(this.bookingData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodaysBookingPage');
  }

  toggleSection(i) {
    this.timings[i].open = !this.timings[i].open;
    
  }

  toggleSubSection(i,j) {
    this.routes[j].open = !this.routes[j].open;
    console.log(i +"-"+j);
  }

  goToHome()
  {

    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }

}
