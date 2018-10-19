import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { HomePage } from '../home/home';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  videos: any[] = [{title: 'manh', url : 'https://youtu.be/2JeKfQ2r2r8'}];
  value = 'https://youtu.be/2JeKfQ2r2r8';



  constructor(public navCtrl: NavController, public navParams: NavParams,private _sanitizer:DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  sanitize(value)
  {
    console.log(this._sanitizer.bypassSecurityTrustResourceUrl(value));
    return this._sanitizer.bypassSecurityTrustResourceUrl(value);
    
    
  }
  goBack()
  {
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }

}
