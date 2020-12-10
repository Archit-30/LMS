import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { LoginUser } from '../services/loginService.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  reglink: string = "/reg-form";
  formSubmitted = false;
  userArray: User[] = [];
  userForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private loginService: LoginUser, private location: Location) {
  }

  getLibMem(): void {
    this.loginService.getLibMemData().subscribe((data: any) => {
      // console.log("data" + data.length);
      this.userArray = data;
    })
  }

  ngOnInit(): void {
    this.getLibMem();
  }

  get password(): any {
    return this.userForm ? this.userForm.get('password') : null;
  }

  get username(): any {
    return this.userForm ? this.userForm.get('username') : null;
  }

  get role(): any {
    return this.userForm ? this.userForm.get('role') : null;
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.userForm.valid && this.userLoginValidation()) {
      this.reflectData();
      this.router.navigateByUrl('login/' + this.role.value);

    } else {
      this.resetForm();
      alert("Login Failed!!! Please Check Credentials")
      this.formSubmitted = false;
    }

    // console.log(this.userLoginValidation(),"hi")
  }

  userLoginValidation(): boolean {
    this.userArray.forEach((element: User) => { console.log(element.id, element.username) });
    const username = this.username.value;
    const password = this.password.value;
    const role = this.role.value;
    let isValid: boolean = false;
    this.userArray.forEach(user => {
      if (user.username === username && user.password === password && user.role === role) {
        console.log("inside if " + user.username, user.password, user.role);
        isValid = true;
        return
      } else {
        console.log("inside else " + user.username, user.password, user.role);

      }
    })
    return isValid;
  }

  resetForm() {
    this.userForm.reset();
  }

  reflectData() {
    console.log('UserName:' + this.username.value);
    console.log('Password:' + this.password.value);
    console.log('Role:' + this.role.value);
  }




}








