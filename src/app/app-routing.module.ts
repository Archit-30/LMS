import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component'
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ManageBookComponent } from './manage-book/manage-book.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  // {path:'', component:AppComponent},
  { path: 'home', component: HomeComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'login/user', component: UserProfileComponent },
  { path: 'login/librarian', component: AdminProfileComponent },
  { path: 'view-detail/:id', component: ViewDetailComponent },
  { path: 'reg-form', component: RegFormComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'manage-book', component: ManageBookComponent },
  { path: 'nav-bar', component: NavbarComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [UserLoginComponent,
  ViewDetailComponent,
  AdminProfileComponent,
  UserProfileComponent,
  AddBookComponent,
  HomeComponent,
  ManageBookComponent,
  NavbarComponent,
  RegFormComponent,
  ViewDetailComponent]