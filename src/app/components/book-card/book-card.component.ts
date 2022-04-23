import { Component, Input, OnInit } from '@angular/core';
import { IBook } from 'src/app/interfaces/book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
@Input() book: IBook | undefined;
id: string | undefined;


  constructor(private bookService: BookService) { }

  ngOnInit(): void {
   this.id = this.book?._id;
  }


}
