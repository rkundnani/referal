import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email;
  otp;
  referal;
  data1;
  number;

  

  constructor(private router : Router,private route1 : ActivatedRoute , private ApiService : ApiService) { }

  ngOnInit() {
    let id = this.route1.snapshot.paramMap.get('id');
    this.number=id
    console.log(id);
  }

  navigate(){
    console.log(this.email,this.referal);
    
    this.ApiService.create(this.email,this.number,this.referal).subscribe((data : any)=>{
      this.data1=data;
      console.log(this.data1);
      if(this.data1!="invalid ReferalCode"){
        this.router.navigate(['/referalcode/',this.email])
      }
      else(
        alert("Enter Valid Referral Code!")
      )
      
    });
    
    
  
  }

  // submit(){
    
  // }

  

}
