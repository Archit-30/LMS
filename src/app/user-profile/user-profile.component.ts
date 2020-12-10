import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../services/bookService/book.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  books: Book[] = [];
  searchBooks = "";

  constructor(private bookService: BookService) { }
  getBooks(): void {
    this.bookService.getBooks().then(books => {
      this.books = books;
    });
  }
  ngOnInit(): void {
    this.getBooks();
  }
}
