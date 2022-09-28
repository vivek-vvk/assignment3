import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from  '@angular/common/http';

import { BookpageComponent } from './bookpage/bookpage.component';
import { BooksComponent } from './books/books.component';
import { AddbookComponent } from './addbook/addbook.component';

import { BooksService } from './books.service';
import { EditComponent } from './edit/edit.component';
import { AuthService } from './auth.service';
import { SignService } from './sign.service';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    BookpageComponent,
    BooksComponent,
    AddbookComponent,
    EditComponent
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BooksService,AuthService,SignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
