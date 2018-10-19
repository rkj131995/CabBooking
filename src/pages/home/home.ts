import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  details: string[]=["assets/imgs/Dcab.jpg","assets/imgs/Ncab.jpg"];
  blurred:boolean = false;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    
  }
  blur()
  {
    if(!this.blurred)
    {
      this.blurred = true;
    }
    else
    {
      this.blurred = false;
    }
    
  }
  getBlur()
  {
    return this.blurred;
  }
}
