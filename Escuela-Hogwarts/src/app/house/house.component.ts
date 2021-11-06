import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  houses: any;

  constructor(public ApiService: ApiService) { }

  ngOnInit() {
  
    this.ApiService.getHouse()
      .subscribe(
        (data) => {
          this.houses = data
        });
  }  
}
