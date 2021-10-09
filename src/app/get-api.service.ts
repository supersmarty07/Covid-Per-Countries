import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetApiService {
  public result: object = {};

  constructor(private http: HttpClient) {}
  apiCall() {
    return (this.result = this.http.get(
      'https://covid-19.dataflowkit.com/v1/spain'
    ));
  }
}
