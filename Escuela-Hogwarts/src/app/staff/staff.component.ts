import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staffs: any;

  constructor(public ApiService: ApiService) { }

  ngOnInit() {
    this.ApiService.getStaff()
     .subscribe(
        (data) => {
          this.staffs = data
        });
  }  
}