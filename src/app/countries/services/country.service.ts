import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observer } from 'rxjs';
import { Country } from '../interfaces/countries.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1/';

  private error: boolean = false;
  private countriesList: Country[] = [];

  public observerList: Observer<Country[]> = {
    next: (value: Country[]) =>
    {
      console.log(`[observer] next`, value);
      this.setCountriesList(value);
    },
    error: (error: Error) =>
    {
      console.error(`[observer] error`, error);
      this.error = true;
    },
    complete: () =>
      console.log(`[observer] complete!`),
  };

  getError() {
    return this.error;
  }
  setError(error: boolean) {
    this.error = error;
  }

  getCountriesList() {
    return this.countriesList;
  }
  setCountriesList(list: Country[]) {
    this.countriesList = list;
  }

  constructor(private httpClient: HttpClient) {
    console.log('CountryService built');
  }

  getApiUrl() {
    return this.apiUrl;
  }

  searchBy( search: string, type: string ) {

    this.error  = false;
    this.countriesList = [];
    this.httpClient.get<Country[]>(`${this.getApiUrl()}/${type}/${search}`)
      .subscribe(this.observerList);
  }

  getCountryById( id: string) {
    this.error  = false;
    this.countriesList = [];
    this.httpClient.get<Country[]>(`${this.getApiUrl()}alpha/${id}`)
    .subscribe(this.observerList);
  }
}
