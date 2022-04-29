import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
loginurl="https://reqres.in/api/login";
productlisturl="https://fakestoreapi.com/products?limit=5";

  constructor(private http:HttpClient) { }

  proceedLogin(data:any){
    return this.http.post(this.loginurl,data)
  }
  isLoggedIn(){
    return localStorage.getItem('token')!=null;
  }
  getProductList(){
    return this.http.get(this.productlisturl);
  }
  getProduct(id:any){
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }
  getUserList(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getUser(id:any){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
  getImg(id:any){
    return this.http.get(`https://reqres.in/api/users/${id}`)
  }
}
