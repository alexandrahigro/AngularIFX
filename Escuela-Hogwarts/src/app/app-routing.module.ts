import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { StudentsComponent } from './students/students.component';
import { StaffComponent } from './staff/staff.component';
import { HouseComponent } from './house/house.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home',component:HomeComponent},
  {path:'house',component:HouseComponent},
  {path:'staff',component:StaffComponent},
  {path:'students',component:StudentsComponent},
   { path: 'reactive-forms', component: ReactiveFormsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
