import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'}, //if path is null redirect to login
  {path:'login',component:LoginComponent}
  ,{path:'signup',component:SingupComponent}
  ,{path:'dashboard',component:UserDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
