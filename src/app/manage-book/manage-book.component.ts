import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../services/bookService/book.service';

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: ['./manage-book.component.css']
})
export class ManageBookComponent implements OnInit {

  books: Book[] = [];
  bookName = "";
  book: Book = new Book();


  constructor(private bookService: BookService) { }
  getBooks(): void {

    this.bookService.getBooks().then(books => {
      console.log("hi " + books.length);
      this.books = books;
    });
  }
  ngOnInit(): void {
    this.getBooks();
  }

}
