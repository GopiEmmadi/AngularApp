import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component';

const routes: Routes = [{path:'',redirectTo:'/hello',pathMatch:'full'},{path:'/hello',component:UserProfileComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
