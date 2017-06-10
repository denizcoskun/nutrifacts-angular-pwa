import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

 import { StoreModule } from '@ngrx/store';
 import { EffectsModule } from '@ngrx/effects';
import { reducer } from './store/reducer';
import { FoodEffects } from './store/effects';
import { NutritionService } from "app/services/nutrition.service";
import { SearchResultComponent } from "app/search-result/search-result.component";
import { FoodResultComponent } from "app/food-result/food-result.component";
import { FoodListComponent } from "app/food-list/food-list.component";
import { FoodDetailComponent } from "app/food-detail/food-detail.component";

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'search'},
  { path: 'search', component: SearchResultComponent},
  { path: 'search/:id', component: FoodResultComponent },
  { path: 'mylist', component: FoodListComponent },
  { path: 'mylist/:id', component: FoodDetailComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    FoodDetailComponent,
    FoodListComponent,
    FoodResultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore(reducer),
    EffectsModule.run(FoodEffects),
    HttpModule
  ],
  providers: [NutritionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
