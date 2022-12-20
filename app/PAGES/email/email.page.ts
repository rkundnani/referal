import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {

  constructor(private router : Router , private route1 : ActivatedRoute) { }
  email;

  ngOnInit() {
    let id = this.route1.snapshot.paramMap.get('id');
    this.email=id
    console.log(id);
  }

  navigate(){
    this.router.navigate(['/email-otp'])
  }

}
