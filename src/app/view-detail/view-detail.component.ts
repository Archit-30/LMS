import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { Book } from '../model/book';
import { BookService } from '../services/bookService/book.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  book: Book = new Book();
  constructor(private route: ActivatedRoute, private router: Router,
    private bookService: BookService, private location: Location) {
  }

  notEmpty<Book>(value: Book | null | undefined): value is Book {
    return value !== null && value !== undefined;
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => this.bookService.getBook(+params['id'])))
      .subscribe(book => this.book = book as Book);
  }
  goBack(): void {
    this.location.back();
  }
} 
