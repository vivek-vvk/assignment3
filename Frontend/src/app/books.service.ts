import { Injectable } from '@angular/core';
import { HttpClient ,HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(public http:HttpClient) { }

getBooks(){
  return this.http.get("https://library12121.herokuapp.com/books");
}

 editbooks(product:any)
 {
   console.log('client update')
   return this.http.put("https://library12121.herokuapp.com/edit",product)
   .subscribe(data =>{console.log(data)})
 }
  
 AddBooks(item:any){
 
    return this.http.post("https://library12121.herokuapp.com/add",{"product":item})
    .subscribe(data =>{console.log(data)})
  
 }

deletebook(id:any)
{

  return this.http.delete("https://library12121.herokuapp.com/remove/"+id)

}
  


 

}
