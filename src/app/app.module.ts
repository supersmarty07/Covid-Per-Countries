import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatisticsComponent } from './details/statistics/statistics.component';

import { CountryComponent } from './details/country/country.component';
import { SearchBarComponent } from './searchComponent/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    CountryComponent,
    SearchBarComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
