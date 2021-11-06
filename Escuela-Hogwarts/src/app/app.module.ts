import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { StudentsComponent } from './students/students.component';
import { StaffComponent } from './staff/staff.component';
import { HouseComponent } from './house/house.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'house', component: HouseComponent},
  { path: 'staff', component: StaffComponent},
  { path: 'students', component: StudentsComponent},
  { path: 'nav', component: NavComponent},
  { path: 'reactive-forms', component: ReactiveFormsComponent},
  ]
@NgModule({
  declarations: [    
    AppComponent,
    NavComponent,
    HomeComponent,
    HouseComponent,    
    StudentsComponent,
    StaffComponent,
    ReactiveFormsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
