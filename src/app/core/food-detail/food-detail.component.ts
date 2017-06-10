import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { Food } from 'app/models/food';

import { Store } from "@ngrx/store";
import * as Actions from "app/store/actions";
import * as fromRoot from "app/store/reducer";

import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit, OnDestroy {

  food: Observable<Food>;
  loading: Observable<Boolean>;
  private destroyed: Subject<{}> = new Subject(); 

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
        .do(id => this.store.dispatch(new Actions.GetFood(id)))
        .subscribe();
  }
  removeFromList(food: Food): void {
    this.store.dispatch(new Actions.RemoveFood(food));
    this.router.navigate(['myfoods']);
  }

  ngOnDestroy() {
    this.destroyed.next(); // emits an action to unsubcsribe from the observable
    this.destroyed.unsubscribe();
  }

}
