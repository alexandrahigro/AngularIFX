import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

   getHouse () {
    return this.http.get("http://hp-api.herokuapp.com/api/characters/house/gryffindor")
   }

   getStaff () {
    return this.http.get("http://hp-api.herokuapp.com/api/characters/staff")
   }

   getStudents () {
    return this.http.get("http://hp-api.herokuapp.com/api/characters/students")
   }

}
