import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  opened = true;
  userDropdown = false;
  productDropdown = false;
  changeDisplay(input: any) {
    if (input == 'product') {
      this.productDropdown = !this.productDropdown;
      this.userDropdown = false;
    } else if (input == 'user') {
      this.userDropdown = !this.userDropdown;
      this.productDropdown = false;
    }
  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigate([''])
  }
}
