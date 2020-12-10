import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  homeLink: string = "/home";
  memlogin: string = "/user-login";
  adminlogin: string = "/admin-login";
  reglink: string = "/reg-form";


  constructor() { }

  ngOnInit(): void {
  }

}
