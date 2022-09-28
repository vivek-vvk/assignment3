import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
@Component({

  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
 books=[{
  
   name:'',
    genre:'',
    writer:'',
   description:''
   }]

  constructor(private booksservice:BooksService,private router:Router) { }

  ngOnInit(): void {
    this.booksservice.getBooks().subscribe((data:any)=>{
    this.books=JSON.parse(JSON.stringify(data));
   })
                  }


editbook(book:any){
  localStorage.setItem("editProductId", book._id.toString());
  this.router.navigate(['edit']);

}

deletebook(book:any)
{
  this.booksservice.deletebook(book._id)
    .subscribe((data) => {
      this.books = this.books.filter(p => p !== book);
      alert("Success");
    })
}



}



