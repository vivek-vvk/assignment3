import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

book={

  name:'',
  genre:'',
  writer:'',
 description:''
}


  constructor(private booksservice:BooksService,private router:Router) { }

  ngOnInit(): void {
    let name= localStorage.getItem("editname");
    this. booksservice.getBooks().subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
  })
  }

  editbooks(){
     this.booksservice.editbooks(this.book);   
     console.log("Called");    
     alert("Success");
    this.router.navigate(['books']);
  }
    
  }




