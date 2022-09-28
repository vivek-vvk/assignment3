import { Component, OnInit } from '@angular/core';
import { SignService } from '../sign.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  User= { 
    name:'',
   email:'',
   number:'',
    password:''
        };
  constructor(private signservice:SignService ) { }

  ngOnInit(): void {
  }
 
  
submit(){
  this.signservice.datasubmit(this.User);
  console.log("Called");    
  alert("Success");


}

}
