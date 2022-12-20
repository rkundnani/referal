import { ApiService } from './../api.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email;
  res;
  message;
  otp;
   
  @Output() clickOutside = new EventEmitter<void>();

  constructor(private router: Router , private ApiService:ApiService,private elementRef: ElementRef) {}

  navigate(){
    this.router.navigate(['/login/',this.email])
  }

  navigate1(){
    this.router.navigate(['/',this.email])
  }

  postemail(email){
   this.ApiService.lookup(this.email).subscribe((data)=>{
    this.message=data;
   console.log(data)});
   
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(target) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      console.log('Clicked Outside');
      this.clickOutside.emit();
    }
  }

  
    
  }






