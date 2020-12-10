import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { FilterPipe } from './filter/filter.pipe';
import { BookService } from './services/bookService/book.service';
import { AddBookComponent } from './add-book/add-book.component';
import { ManageBookComponent } from './manage-book/manage-book.component';




const routingApp: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'librarian', component: AdminProfileComponent },
  { path: 'view-detail/:id', component: ViewDetailComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserLoginComponent,
    NavbarComponent,
    UserProfileComponent,
    RegFormComponent,
    AdminProfileComponent,
    FilterPipe,
    ViewDetailComponent,
    AddBookComponent,
    ManageBookComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [PostService, BookService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
