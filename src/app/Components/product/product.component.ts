import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public singleProduct:any;

  top="1"
  right="1"
  lensWidth="50"
  lensHeight="50"
  resultWidth="20"
  resultHeight="40"
imgWidth="100"
  imgHeight="100"
  constructor(private route: ActivatedRoute, private service:AuthServiceService) { }

  ngOnInit(): void {
   
    this.route.paramMap.subscribe(params=>{
      console.log(params.get('id'))
      this.service.getProduct(params.get('id')).subscribe(p=>{
        //console.log(p);
        this.singleProduct=p;
      })
    })
    
  }

}
