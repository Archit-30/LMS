import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = 'http://localhost:4000/books';
  bookArray: Book[] = [];

  constructor(private httpClient: HttpClient) {

  }

  getBooks(): Promise<Book[]> {
    this.httpClient.get("http://localhost:4000/books").subscribe((data: any) => {
      this.bookArray = data;
    });
    return Promise.resolve(this.bookArray);
  }

  getBook(id: number): Promise<Book | undefined> {
    console.log("Id : " + id);
    return this.getBooks().then(books => books
      .find(book => book.id === id));
  }

} 