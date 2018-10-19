import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CabService } from '../../app/service/cab.service';
import { HomePage } from '../home/home';

/**
 * Generated class for the CabMatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cab-mates',
  templateUrl: 'cab-mates.html',
})
export class CabMatesPage {
  bookingId:any;
  cabMates:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service: CabService) {
    
    
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CabMatesPage');
    this.bookingId = this.navParams.get('bookingId');
    this.service.getMyCabMates(this.bookingId).subscribe(response => { this.cabMates = response });
  }

  goToHome()
  {

    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }

}
