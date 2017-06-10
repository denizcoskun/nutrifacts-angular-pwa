import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

 import { StoreModule } from '@ngrx/store';
 import { EffectsModule } from '@ngrx/effects';
import { reducer } from './store/reducer';
import { FoodEffects } from './store/effects';
import { NutritionService } from "app/services/nutrition.service";

const routes: Routes = [
                { path: '', pathMatch:'full', redirectTo: 'welcome' },
                 {path: 'welcome', component: WelcomeComponent },
                 {path: 'app', loadChildren: './core/core.module#CoreModule' }
              ];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
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
