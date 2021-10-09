import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public searchCountry: string = '';

  constructor(private api: GetApiService) {}
  ngOnInit() {
    this.api.apiCall().subscribe((data) => {
      console.log(data);
    });
  }

  receiveCountry(newCountry: string) {
    this.searchCountry = newCountry;
    console.log(newCountry);
  }
}
