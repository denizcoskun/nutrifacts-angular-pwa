import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducer';
import * as Actions from './store/actions';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/fromEvent';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

@ViewChild('input') input: ElementRef;
  title: Observable<string>;
  loading: Observable<boolean>;
  searchControl = new FormControl('');

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.title = this.store.select(state => state.title);
    this.loading = this.store.select(state => state.loading);
    this.searchControl.valueChanges
      .debounceTime(300)
      .switch()
      .filter((value) => value.trim())
      .do(() => this.store.dispatch(new Actions.Search(this.searchControl.value)))
      .subscribe();
    /*
    Observable.fromEvent(this.input.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(250)
      .do((query: string) =>
         this.store.dispatch(new Actions.Search(query))
         )
      .switch()
      .subscribe();
      */
  };
}
