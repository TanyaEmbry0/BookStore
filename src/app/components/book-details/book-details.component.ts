import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from 'src/app/interfaces/book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  id: string = '';
  book: IBook | undefined;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getBook(this.id);
  }
  onEditBook() {}
  onDeleteBook() {}

  getBook(id: string) {
    return this.bookService.getBook(this.id).subscribe((book) => {
      this.book = book;
    });
  }
  // return this.bookService.getBooks().subscribe((book) => {
  //   this.books = book;
  // })
}
