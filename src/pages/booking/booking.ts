import { Component,Input } from '@angular/core';
import { NavController, NavParams, ToastController,ModalController,LoadingController } from 'ionic-angular';
import { CabService } from '../../app/service/cab.service';
import {FormGroup, FormBuilder} from '@angular/forms'
import { CabBooking } from "../../app/models/cab.booking";
import { DomSanitizer } from "@angular/platform-browser";
import { Observable } from 'rxjs/Observable';
import { HomePage } from '../home/home';
//import { TodaysBookingPage } from '../todays-booking/todays-booking';
import { BookingConfirmationPage } from '../booking-confirmation/booking-confirmation';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';
import { SelectSearchable } from 'ionic-select-searchable';

/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
class Employee {
 
  // private  id:number;
	// private  name:string;	
	// private  empId:string;
	// private  emailId:string;
	
}

@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  empData:Employee[];
  
  routeData:any;
  public myForm: FormGroup;
  bookingId:string="";  
  model = new CabBooking('','','','','');
  time :any;
  flag = true;

  timeData = [{"id":1, "name": "8:30"},{"id":2, "name": "10:00"}];

  @Input()
  public editMode = true;
  constructor(public smartAudio:SmartAudioProvider,public loadingCtrl: LoadingController,public navCtrl: NavController,public modalCtrl: ModalController, public toastCtrl:ToastController, public navParams: NavParams,private builder: FormBuilder, public service:CabService,private _sanitizer:DomSanitizer) {
    this.myForm = this.builder.group({
      employee : "",
      route: "",
      time:"",
      dropPoint:""
    });
    this.service.getEmployeeData().subscribe(response => { this.empData = response });
    this.service.getRouteData().subscribe(res =>{this.routeData = res} );
    
  }

  autocompleListFormatter = (data: any) => {
    let html = `<span style=''>${data.name}(${data.id}) </span>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
    
  }
  goBack()
  {
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }

  showToastWithCloseButton(msg:string) {
    const toast = this.toastCtrl.create({
      message: msg,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }
  // presentModal() {
  //   let modal = this.modalCtrl.create(ModalPage);
  //   modal.present();
  // }
  presentLoading() {
    
  }
  portChange(event: { component: SelectSearchable, value: any }) {
    console.log('value:', event.value);
}
 
  onSubmit(value:any){
    console.log(value.employee.name);
    console.log(value);
    
    let bookingOperation:Observable<CabBooking[]>;
    this.model.employeeName=value.employee.name+"("+value.employee.id+")";
    this.model.dropPoint=value.dropPoint;
    this.model.routeNumber=value.route.name;
    this.model.time=value.time.name;
    this.model.emailId = value.employee.emailId;
    console.log(this.model);
    bookingOperation=this.service.bookCab(this.model);
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000000
    });
    loader.present();
    bookingOperation.subscribe(res =>{this.bookingId=res['bookingId']+res['createDateTime'];
    console.log("booking details:-"+res);

    this.myForm.reset();
    if(this.bookingId!='0'){
    //this.router.navigate(['/current-bookings', { id: this.bookingId } ]);    
    //this.showToastWithCloseButton('Booking done with Id:'+this.bookingId);
    
      loader.dismiss();
      this.navCtrl.push(BookingConfirmationPage,{route:res['routeNumber'],employeeName:res['employeeName'],time:res['time'],bookingId:res['bookingId']});
      this.smartAudio.play('tabSwitch');
    
    // let profileModal = this.modalCtrl.create(BookingConfirmationPage);
    // profileModal.present();    
  }
    else{
    //this.mdSnackBar.open('Unsuccessfull..Already Booked!! check current bookings', 'Close', { duration: 1000,extraClasses: ['failed-snackbar']});
    this.showToastWithCloseButton('Unsuccessfull..Already Booked!! check current bookings');
    loader.dismiss();
    
    
  }
    
  
  });
    
    

   
  }

}
