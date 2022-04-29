import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
responsedata:any;
  constructor(private service: AuthServiceService, private route:Router) { }
  getToken(data:any){
    console.log(data)
    if(data.email=="eve.holt@reqres.in" && data.password=="cityslicka"){
      this.service.proceedLogin(data).subscribe(result=>{
        if(result!=null){
          this.responsedata=result;
          localStorage.setItem('token',this.responsedata.token)
          this.route.navigate(['dashboard']);
        }
      })
      console.log(data)
    }
   
  }
  ngOnInit(): void {
  }

}
