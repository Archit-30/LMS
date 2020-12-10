import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';

@Injectable({ providedIn: 'root' })

export class LoginUser {
  userArray: User[] = [];
  constructor(private http: HttpClient) {

  }

  getLibMem(): Promise<User[]> {

    this.http.get("http://localhost:4000/RegisterUser").subscribe((data: any) => {
      this.userArray = data;
    });
    return Promise.resolve(this.userArray);
  }

  getLibMemData() {
    return this.http.get("http://localhost:4000/RegisterUser");
  }


}