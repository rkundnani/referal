import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {SmsManager} from "@byteowls/capacitor-sms";
import {Device, DeviceInfo} from "@capacitor/device";


@Component({
  selector: 'app-mobile-otp',
  templateUrl: './mobile-otp.page.html',
  styleUrls: ['./mobile-otp.page.scss'],
})
export class MobileOTPPage implements OnInit {

  constructor(private router : Router,private route1:ActivatedRoute, private ApiService : ApiService) { }
  number;
  otp1
  data1;
  data2;
  ngOnInit() {
    let id = this.route1.snapshot.paramMap.get('id');
    this.number=id
    console.log(id);
    this.generateOtp();
  }

  navigate(){
    this.router.navigate(['/register/',this.number])
  }

  generateOtp() {
    this.ApiService.mobileOpt(this.number).subscribe(data=>{
      this.data1=data;
      console.log(this.data1);
    })
    
}

  validate(){
    this.ApiService.validate(this.number,this.otp1).subscribe(data=>{
      console.log(this.number,this.otp1)
      this.data2=data;
      console.log(this.data2);

      if(this.data2=="MobileOTP is verified"){
        this.router.navigate(['/register/',this.number])
      }
      else{
        alert(this.data2)
      }
    })

  }

}
