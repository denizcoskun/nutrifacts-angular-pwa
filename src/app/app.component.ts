import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducer';
import * as Actions from './store/actions';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

@ViewChild('input') input: ElementRef;
  title: Observable<string>;
  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(){
    this.title = this.store.select(state => state.title);
    Observable.fromEvent(this.input.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(250)
      .do((query: string) =>{console.log('a');
         this.store.dispatch(new Actions.Search(query));
      })
      .switch()
      .subscribe();

  } 
}
