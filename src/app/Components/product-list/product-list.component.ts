import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
data:any=[];
math=Math;
starRating1=1;
starRating2=2;
starRating3=3;
starRating4=4;
starRating5=5;
p: number = 1;
count: number = 4;
  constructor(private service:AuthServiceService, private router:Router) {
    
   }

  ngOnInit(): void {
    this.getdetails();
  }
  getdetails(){
    this.service.getProductList().subscribe((data)=>{
      console.log("data",data)
      this.data=data;
      
    })
  }
  // onSelect(item:any){
  //   this.router.navigate(['/products',item.id,this.data])
  // }

}
