import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/countries.interfaces';
/*_import { _switchMap } _from 'rxjs';*/

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.css']
})
export class ViewCountryComponent implements OnInit {

  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  )
  {
    console.log('ViewCountryComponent - constructor');
  }

  getCountry(): Country {
    return this.countryService.getCountriesList()[0];
  }

  ngOnInit(): void {
    console.log('ViewCountryComponent - ngOnInit');

    this.activatedRoute.params.subscribe(
      (params) => {
          this.countryService.getCountryById(params['id']);
      }
    );
     //Se puede usar destructuracion suscribe(({id})) => ...
    // this.activatedRoute.params
    //   .pipe(
    //     switchMap( (param) => this.countryService.getCountryById(param['id']) )
    //   )
    //   .subscribe( resp => {
    //     console.log(resp);
    //   })


  }
}
