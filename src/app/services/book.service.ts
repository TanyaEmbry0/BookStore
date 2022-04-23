import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBook } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})

export class BookService{

    constructor(private httpClient: HttpClient) { }

    getBooks(): Observable<any> {
      return this.httpClient.get<IBook>('https://murmuring-cliffs-61613.herokuapp.com/books');
    }

    getBook(id: string) : Observable<any>{
      return this.httpClient.get<IBook>(`https://murmuring-cliffs-61613.herokuapp.com/books/${id}`);
    }

    addBook(){
      return this.httpClient.post('https://murmuring-cliffs-61613.herokuapp.com/books/create', {});
    }

    deleteBook(id: string) {
      return this.httpClient.delete(`http://localhost:3000/books/${id}`);
    }

}
