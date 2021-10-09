import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StatisticsComponent } from './detail/statistics/statistics.component';
import { CountryComponent } from './detail/country/country.component';
import { SearchBarComponent } from './searchComponent/search-bar/search-bar.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { GetApiService } from './get-api.service';

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    CountryComponent,
    SearchBarComponent,
    DetailComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [GetApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
