import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) { }
onSubmit(data:any){
  this.http.post('https://reqres.in/api/register',data)
  .subscribe(res=>{
   alert("Data Added Successfully!!")
    this.router.navigate(['dashboard'])
  }, error=>{
    if(error.status==400){
      alert("Please Retry!!");
    }
    
  })
}
  ngOnInit(): void {
  }

}
