import { Injectable } from '@angular/core';
import { HttpClient ,HttpResponse} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }


  loginUser(user:any)
  {
    return this.http.post("https://library12121.herokuapp.com/login",{"product":user})
    .subscribe(data =>{console.log(data)})
  }

 
}

