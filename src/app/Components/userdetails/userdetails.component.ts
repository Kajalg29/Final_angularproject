import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
public singleUser:any;
public userImg:any;
  constructor(private route:ActivatedRoute, private service:AuthServiceService, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      console.log(params.get('id'))
      this.service.getUser(params.get('id')).subscribe(u=>{
        console.log(u);
        this.singleUser=u;
      })
    })

    this.route.paramMap.subscribe(params=>{
      this.service.getImg(params.get('id')).subscribe(i=>{
        console.log(i);
        this.userImg=i;
      })
    })

   
  }
  back(){
      this.router.navigate(['userlist'])
  }

}
