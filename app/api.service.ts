import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError, map } from 'rxjs/operators';
import { Observable, throwError ,from} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpx : HTTP , private http : HttpClient) { }

  lookup(email1):Observable<any>{
    let params1 = {"email" : email1};
    console.log(email1)
    return this.http.post("http://hacathanprafulla-env.eba-kgp8wwme.ap-south-1.elasticbeanstalk.com/lookup", {'email' : email1});
    
  // }


  // this.httpx.setDataSerializer('json');
  //   return from (this.httpx.("http://hacathanprafulla-env.eba-kgp8wwme.ap-south-1.elasticbeanstalk.com/lookup", {"email" : email1}, {})).pipe((map(res => { 
  //       return res
  //     }),catchError((err) => {  
      
  //       return throwError(err);  
      
      
  //     })
  //     ));
    }

  generateOtp(email){
  
    return this.http.post("http://hacathanprafulla-env.eba-kgp8wwme.ap-south-1.elasticbeanstalk.com/generateOTP",{'email' : email});
  
}

  validateOtp(email,otp){
    return this.http.post("http://hacathanprafulla-env.eba-kgp8wwme.ap-south-1.elasticbeanstalk.com/verifyUserOTP/" + otp , {'email' : email},{ responseType: 'text' });
  }

referalcode(){
  return this.http.get("http://hacathanprafulla-env.eba-kgp8wwme.ap-south-1.elasticbeanstalk.com/referralCode", { responseType: 'text' })
}

create(email,mobile,referal){

  console.log(email,mobile,referal)

  return this.http.post("http://hacathanprafulla-env.eba-kgp8wwme.ap-south-1.elasticbeanstalk.com/createUser",{'email' : email ,'mobile': mobile, 'referralCode': referal},{ responseType: 'text' });

}

mobileOpt(number){

  return this.http.post("http://hackathon11-env.eba-dzigmfp6.ap-northeast-1.elasticbeanstalk.com/generateOTPMobile",{'mobile' : number});

}

validate(number,otp){
  return this.http.post("http://hackathon11-env.eba-dzigmfp6.ap-northeast-1.elasticbeanstalk.com/verifyUserOTPMobile/" + otp , {'mobile' : number},{ responseType: 'text' });
}


rewards(email){
  return this.http.post("http://hacathanprafulla-env.eba-kgp8wwme.ap-south-1.elasticbeanstalk.com/userBalance",{'email' : email});
  

}

code(email){
  return this.http.post("http://hacathanprafulla-env.eba-kgp8wwme.ap-south-1.elasticbeanstalk.com/referralCodeByEmail",{'emailId' : email},{ responseType: 'text' });
}

}



