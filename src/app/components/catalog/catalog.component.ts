import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/interfaces/book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  books: IBook[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.showAllBooks();

  }

  showAllBooks() {
    return this.bookService.getBooks().subscribe((book) => {
      this.books = book;
    })
  }

}


