import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()

export class PostService {

    constructor(private http: HttpClient) { }

    postValue1(obj: any) {
        this.http.post('http://localhost:4000/RegisterUser', obj
        )
            .subscribe(res => console.log(res));
    }

    AddBook(obj: any) {
        this.http.post('http://localhost:4000/Books', obj
        )
            .subscribe(res => console.log(res));
    }



}