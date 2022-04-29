import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users:any=[];
  p: number = 1;
  
  constructor(private service:AuthServiceService) { }

  ngOnInit(): void {
    this.service.getUserList().subscribe((data)=>{
      console.log(data)
      this.users=data;
    })
  }
  geoLocation!: object;

  displayStyle = 'none';

  openMap(data: object) {
    this.geoLocation = data;
    console.log(data);

    this.displayStyle = 'block';
  }
  closeMap() {
    this.displayStyle = 'none';
  }
}
