import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,

  Validators,
} from '@angular/forms';

import { Subscription } from 'rxjs';
import { CreatedBook } from 'src/app/interfaces/createdBook.interface.';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  addBookForm: FormGroup;
  subscription?: Subscription;
  addedBy: string;
  token: string;
  newBook: CreatedBook;
  constructor(
    private authServices: AuthenticationService,
    private bookServices: BookService
  ) {}

  ngOnInit() {
    this.addBookForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      genre: new FormControl(null, Validators.required),
      description: new FormControl(null, [
        Validators.minLength(20),
        Validators.required,
      ]),
      imageUrl: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^https?/),
      ]),
    });
    console.log(this.addBookForm);
  }

  onAddBookSubmit() {
    this.addedBy = this.authServices.getUserId();
    this.token = this.authServices.getUserToken();
console.log(this.addBookForm)
if (this.addBookForm.invalid) {
  this.addBookForm.markAllAsTouched();

  return;
}


    this. newBook = {
      title: this.addBookForm.controls['title'].value,
      author: this.addBookForm.controls['author'].value,
      genre: this.addBookForm.controls['genre'].value,
      description: this.addBookForm.controls['description'].value,
      imageUrl: this.addBookForm.controls['title'].value,
      addedBy: this.addedBy,
    };
  
    // const options = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${this.token}`,
    //   },
    //   body: this.newBook,
    // };
   
    this.subscription = this.bookServices.addBook(this.newBook, this.token).subscribe({
      next: (response) => {
        console.log(response);
      },

      error: (error) => {
        alert(error.response.message);
      },
    });
  }
  // "title": string,
  // "author": string,
  // "genre": string,
  // "description": string,
  // "imageUrl": string,
  // "addedBy": string,
}
