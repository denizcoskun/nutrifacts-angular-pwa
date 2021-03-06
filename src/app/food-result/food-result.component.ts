import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { Food } from 'app/models/food';


import { Store } from "@ngrx/store";
import * as fromRoot from 'app/store/reducer';
import * as Actions from 'app/store/actions';

import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-food-result',
  templateUrl: './food-result.component.html',
  styleUrls: ['./food-result.component.css']
})
export class FoodResultComponent implements OnInit, OnDestroy {

  // a subject to manage unsubscription
  private destroyed: Subject<{}> = new Subject(); 

  food: Observable<Food>;
  loading: Observable<Boolean>;

  constructor(private route: ActivatedRoute, private router: Router,
              private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new Actions.RouteChange('Nutrition Facts (per 100g)'));
    this.food = this.store.select(state => state.selectedFood);
    this.loading = this.store.select(state => state.loading);

    this.route.params
        .map(params => params.id)
        .takeUntil(this.destroyed)
        .do((id) => this.store.dispatch(new Actions.FetchFood(id)))
        .subscribe();
  }
  
  addToList(): void{
    this.store.dispatch(new Actions.AddFood());
    this.router.navigate(['mylist']);
  }

  ngOnDestroy() {
    this.destroyed.next(); // emits an action to unsubcsribe from the observable
    this.destroyed.unsubscribe();
  }

}
