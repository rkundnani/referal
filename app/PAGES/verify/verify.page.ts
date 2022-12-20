import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {
  email;
  otp;
  otp1;
  data1
  constructor(private router : Router, private route1 : ActivatedRoute , private ApiService:ApiService , private alertController : AlertController) { }

  ngOnInit() {
    let id = this.route1.snapshot.paramMap.get('id');
    this.email=id
    console.log(id);
    this.generateOtp(this.email);
  }

  navigate(){

    this.ApiService.validateOtp(this.email,this.otp1).subscribe((data)=>{
      this.data1=data;
      if(this.data1=="User is verified"){
        this.router.navigate(['/mobile'])
      }
      else{
        alert(this.data1)
      }
  });

  

}

  generateOtp(email){
    this.ApiService.generateOtp(this.email).subscribe((data : any)=>{
      this.otp=data;
      console.log(this.otp)
    });}


    verify(){
      if(this.data1=="User is verified"){
        this.router.navigate(['/register/',this.email])
      }
      else{
        alert(this.data1)
      }
    }


}
