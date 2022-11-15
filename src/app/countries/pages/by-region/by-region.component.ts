import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent implements OnInit {

  regiones: string[] = ['africa','americas','asia','europe','oceania','antarctic'];
  private type: string = 'region';
  public title: string = 'By Region';

  getError() {
    return this.countryService.getError();
  }

  getCountriesList() {
    return this.countryService.getCountriesList();
  }

  constructor(private countryService: CountryService) {
    console.log('Search By Region - constructor');
  }

  ngOnInit(): void {
    console.log('Search By Region - ngOnInit');
  }

  public searchBy( search: string) {
    console.log(search);
    this.countryService.searchBy(search, this.type);
  }

}
