import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  temp: any = {};
  user: User;
  constructor(private postService: PostService, private router: Router) { }


  ngOnInit(): void {
  }

  onSubmit(forms: NgForm) {

    this.user = forms.form.value;
    this.postService.postValue1(this.user);
    this.router.navigate([`user-login`]);
    alert("Registration Successful");
  }


}
