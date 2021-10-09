import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  public countryName: string = '';
  constructor() {}
  @Output() newCountry = new EventEmitter<string>();
  passCountryName() {
    this.newCountry.emit(this.countryName);
  }

  ngOnInit(): void {}
}
