import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SmsManager} from "@byteowls/capacitor-sms";
import {Device, DeviceInfo} from "@capacitor/device";

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.page.html',
  styleUrls: ['./mobile.page.scss'],
})
export class MobilePage implements OnInit {

  constructor(private router : Router) { }

  number;

  ngOnInit() {
 
  }

  navigate(){
    this.router.navigate(['/mobile/',this.number])
  }



}
