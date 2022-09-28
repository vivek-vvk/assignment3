
import { Injectable } from '@angular/core';
import { HttpClient ,HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignService {
  item={
    name:'',
    email:'',
    number:'',
     password:''
  }

  constructor(public http:HttpClient) { }


datasubmit(item:any)
  {   
    return this.http.post("https://library12121.herokuapp.com/",{"product":item})
    .subscribe(data =>{console.log(data)})
  }



}
