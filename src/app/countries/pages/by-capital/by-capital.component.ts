import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent implements OnInit {

  public title: string = 'By Capital';
  private type: string = 'capital';

  getError() {
    return this.countryService.getError();
  }

  getCountriesList() {
    return this.countryService.getCountriesList();
  }

  constructor(private countryService: CountryService) {
    console.log('Search By Capital - constructor');
   }

  ngOnInit(): void {
    console.log('Search By Capital - ngOnInit');
  }

  public searchBy( search: string) {
    this.countryService.searchBy(search, this.type);
  }

}
