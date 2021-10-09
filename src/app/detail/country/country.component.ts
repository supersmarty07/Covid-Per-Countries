import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { take } from 'rxjs/operators';
import { GetApiService } from 'src/app/get-api.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  public CountryName: string = '';
  public NewCase: string;
  public NewDeaths: string;
  public TotalCases: string;
  public TotalDeaths: string;
  public TotalRecovered: string;
  constructor(
    private api: GetApiService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.api
      .apiCall()
      .pipe(take(1))
      .subscribe((data: any) => {
        if (data) {
          this.CountryName = data.Country_text;
          this.NewCase = data['New Cases_text'];
          this.NewDeaths = data['New Deaths_text'];
          this.TotalCases = data['Total Cases_text'];
          this.TotalDeaths = data['Total Deaths_text'];
          this.TotalRecovered = data['Total Recovered_text'];
        }
        (error) => {
          this.CountryName = error;
        };
        () => {
          this.changeDetectorRef.detectChanges();
        };
      });
  }
}
