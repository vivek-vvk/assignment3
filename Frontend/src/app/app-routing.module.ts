import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { BooksComponent } from './books/books.component';
import { EditComponent } from './edit/edit.component';
import { AddbookComponent } from './addbook/addbook.component';
const routes: Routes = [

{path:'',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'bookpage',component:BookpageComponent,
children:[
  {path:'books',component:BooksComponent,children:[{path:'edit',component:EditComponent}]},
  {path:'add',component:AddbookComponent}

]}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
