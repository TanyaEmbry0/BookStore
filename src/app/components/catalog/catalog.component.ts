import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  test(): void {
    console.log(this.bookService.getBooks());
  }
}
