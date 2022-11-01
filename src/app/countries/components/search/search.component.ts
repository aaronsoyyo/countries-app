import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public search: string = '';

  @Input() placeholder: string = 'By Country';
  @Output() onSearch: EventEmitter<string> = new EventEmitter ();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  constructor(private countryService: CountryService) {
    console.log('SearchComponent - constructor');
  }

  deBouncer: Subject<string> = new Subject();

  initSearch() {
    console.log('init Search');
    this.onSearch.emit(this.search);
  }

  ngOnInit(): void {
    console.log('SearchComponent - ngOnInit');
    this.deBouncer
      .pipe(debounceTime(300))
      .subscribe( valor => {
      console.log('deBouncer' + valor);
      this.onDebounce.emit(valor);
    })
  }

  keyPress( ) {
    this.deBouncer.next( this.search );

  }

}
