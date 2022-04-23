import { Component, OnInit } from '@angular/core';
import { IBook } from '../interfaces/book.interface';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss'],
})
export class CatalogListComponent implements OnInit {
  books: IBook[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.showAllBooks();
  }

  showAllBooks() {
    return this.bookService.getBooks().subscribe((book) => {
      this.books = book;
    });
  }
}
