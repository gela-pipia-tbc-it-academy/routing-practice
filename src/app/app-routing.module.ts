import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserOneComponent } from './users/user-one/user-one.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home Page' },
  { path: 'users', component: UsersComponent, title: 'Users Page' },
  {
    path: 'users/user-1',
    component: UserOneComponent,
    title: "User One's Page",
  },
  { path: '**', component: NotFoundComponent, title: 'Page Not Found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
