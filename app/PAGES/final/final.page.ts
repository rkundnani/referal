import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-final',
  templateUrl: './final.page.html',
  styleUrls: ['./final.page.scss'],
})
export class FinalPage implements OnInit {
  email;

  constructor(private router : Router , private route1:ActivatedRoute) { }

  ngOnInit() {
    let id = this.route1.snapshot.paramMap.get('id');
    this.email=id
    console.log(id);
  }

  navigate(){
    this.router.navigate(['/congratulations/',this.email])
  }

}
