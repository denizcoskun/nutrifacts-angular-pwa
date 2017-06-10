import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../../models/search-result';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducer';
import * as Actions from '../../store/actions';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

results: Observable<SearchResult[]>;
loading: Observable<Boolean>;

  constructor(private store: Store<fromRoot.State>) { 
    this.results = this.store.select(state => state.results);
    this.loading = this.store.select(state => state.loading);
  }

  ngOnInit() {
          this.store.dispatch(new Actions.RouteChange('Results'));
  }

}
