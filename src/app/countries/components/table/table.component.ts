import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  getCountriesList() {
    return this.countryService.getCountriesList();
  }

  constructor(private countryService: CountryService) {
    console.log('TableComponent - constructor');
  }

  ngOnInit(): void {
    console.log('TableComponent - ngOnInit');
  }

}
