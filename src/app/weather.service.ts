import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(zipcode) {
    let zipLocation = 'http://api.apixu.com/v1/forecast.json?key=8ca3550e6ec5459d8ac224045170711&q=' + zipcode + '&days=1';

    return this.http.get(zipLocation);
  }
}
