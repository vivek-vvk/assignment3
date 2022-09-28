import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  book={
      name:'',
      genre:'',
      writer:'',
      description:''
       }
  constructor(private booksservice:BooksService,private router:Router) { }
 
  
  ngOnInit(): void {
  }

  AddBook()
  {    
    this.booksservice.AddBooks(this.book);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/books']);
  }


}
