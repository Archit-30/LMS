import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService} from '../services/bookService/book.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  books: Book[] = [];
  searchBooks= "";

    constructor(private bookService: BookService) { }
    getBooks(): void {
        this.bookService.getBooks().then(books => {
          console.log("hi "+ books.length);
          this.books = books;
        });
    }
    ngOnInit(): void {
        this.getBooks();
    }			

}
