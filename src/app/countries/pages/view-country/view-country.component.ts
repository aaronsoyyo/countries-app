import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.css']
})
export class ViewCountryComponent implements OnInit {

  constructor() {
    console.log('ViewCountryComponent - constructor');
  }

  ngOnInit(): void {
    console.log('ViewCountryComponent - ngOnInit');
  }

}
