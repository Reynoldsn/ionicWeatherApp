import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

import * as _ from 'lodash';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  currentWeather;
  zipcode: String;
  searching: Boolean = false;
  location: String;
  minTemp: Number;
  maxTemp: Number;
  percip: Number;
  wind: Number;
  weatherResults: Object;
  forecast: any[];
  
  constructor(private weather: WeatherService) {}

  ngOnInit() {
  }

  getWeather(zipcode) {
    this.weather.getWeather(zipcode)
    .subscribe((resp: any) => {
      this.weatherResults = resp;
      this.currentWeather = resp.current.temp_f;
      this.location = resp.location.name;
      this.percip = resp.current.precip_in;
      this.wind = resp.current.wind_mph;

      _.each(resp.forecast, (data) => {
        this.forecast = data;
        this.maxTemp = data[0].day.maxtemp_f;
        this.minTemp = data[0].day.mintemp_f;
      })

      console.log(resp);
    });
  }

  toggleSearch() {
    this.searching = !this.searching;
    this.zipcode = '';
  }
}
