import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.route'
import { AppComponent } from './app.component';
import { RestaurantsSortComponent } from './restaurants-sort/restaurants-sort.component';
import { FormsModule } from "@angular/forms";
import { LocationPipe } from "./restaurants-sort/category.pipe";
import { Hc } from "./home-component/home-component.component";
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    Hc,
    RestaurantsSortComponent,
    LocationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    StarRatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
