import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { E404Component } from './core/e404/e404.component'
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {path: "", redirectTo: "/home",pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "**", component: E404Component},
  {path: "user-list", component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
