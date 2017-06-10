import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from './search-result/search-result.component';
import { RouterModule, Routes} from '@angular/router';
import { StoreModule } from "@ngrx/store";
import { FoodListComponent } from '../food-list/food-list.component';
import { FoodResultComponent } from '../food-result/food-result.component';
import { FoodDetailComponent } from '../food-detail/food-detail.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'search'},
  { path: 'search', component: SearchResultComponent},
  { path: 'search/:id', component: FoodResultComponent },
  { path: 'mylist', component: FoodListComponent },
  { path: 'mylist/:id', component: FoodDetailComponent }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    ],
  declarations: [SearchResultComponent, FoodListComponent, FoodResultComponent, FoodDetailComponent]
})
export class CoreModule { }
