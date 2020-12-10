import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../model/book';
import { PostService } from '../services/post.service';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {


  temp: any = {};
  book: Book;
  form: NgForm;
  constructor(private postService: PostService, private router: Router, private location: Location) { }


  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    this.book = form.value;
    this.postService.AddBook(this.book);

    alert("Book Successfully Added");
    this.resetForm();
  }

  resetForm() {
    this.form.value.reset();
  }

  goBack(): void {
    this.location.back();
  }
}
