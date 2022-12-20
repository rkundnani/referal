import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-email-otp',
  templateUrl: './email-otp.page.html',
  styleUrls: ['./email-otp.page.scss'],
})
export class EmailOtpPage implements OnInit {
  email;
  otp;
  data1;
  otp1;


  constructor(private router : Router,private ApiService :ApiService,private route1 : ActivatedRoute) { }

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
        this.router.navigate(['/final/',this.email])
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




  // validate(){
  //   var ans=runInThisContext.ApiService.validateOtp(this.email,this.otp);

  // }

}
