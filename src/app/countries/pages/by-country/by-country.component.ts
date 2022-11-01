import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent implements OnInit {

  public title: string = 'By Country';
  public type: string = 'name';

  getError() {
    return this.countryService.getError();
  }

  getCountriesList() {
    return this.countryService.getCountriesList();
  }

  constructor(private countryService: CountryService) {
    console.log('Search By Country - constructor');
  }

  ngOnInit(): void {
    console.log('Search By Country - ngOnInit');
  }

  public searchBy( search: string) {
    this.countryService.searchBy(search, this.type);
  }

}
