import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { UsersComponent } from './component/users/users.component';
import { UserResolver } from './service/user.resolver';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'user-details/:uuid', component: UserDetailsComponent, resolve: { resolvedResponse: UserResolver } },
  { path: '**', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
