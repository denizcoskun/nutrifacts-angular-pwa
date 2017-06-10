import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from './search-result/search-result.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '/', pathMatch:'full', redirectTo: 'list'},
  {path: 'list', component: SearchResultComponent}
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchResultComponent]
})
export class CoreModule { }
