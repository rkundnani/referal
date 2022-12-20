import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.page.html',
  styleUrls: ['./congratulations.page.scss'],
})
export class CongratulationsPage implements OnInit {

  referal;
  email;
  reward;
  code1;


  constructor(private  ApiService : ApiService,private route : Router,private route1:ActivatedRoute) { }

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

  

  rewards(){
    this.ApiService.rewards(this.email).subscribe(data=>{
      this.reward=data;
      console.log(this.reward)
    })
    }
    
    code(){
      this.ApiService.code(this.email).subscribe(data=>{
        this.code1=data;
        console.log(this.code1,data)
      })
    }


    navigate(){
      this.route.navigate(['/home'])
    }

}