import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-referalcode',
  templateUrl: './referalcode.page.html',
  styleUrls: ['./referalcode.page.scss'],
})
export class ReferalcodePage implements OnInit {
  referal;
  email;
  code1;
  reward;
  


  constructor(private ApiService:ApiService , private route : Router , private route1 : ActivatedRoute) { }

  ngOnInit() {
    let id = this.route1.snapshot.paramMap.get('id');

    this.email=id

    console.log(id);
    this.rewards();
    this.code();
  }

  share(){
    Share.share({
      title: 'Refer and Earn !',
      text: 'Please download the app, and get 500 credited in your account!, Use Referral Code : '+this.code1,
      dialogTitle: 'Share with buddies',
    });
   
  }





referalcode(){
  this.ApiService.referalcode().subscribe(data=>{
    console.log(data)
        this.referal=data;
        console.log(this.referal);
});

}
navigate(){
  this.route.navigate(['/home'])
}

rewards(){
this.ApiService.rewards(this.email).subscribe(data=>{
  this.reward=data;
  console.log(this.reward)
})
}

code(){
  this.ApiService.code(this.email).subscribe(data=>{
    this.code1=data;
    console.log(this.code1)
  })
}

}
