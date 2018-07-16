import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherProvider {
  url;
   
  constructor(public http: Http) {
    this.url = 'https://jsonplaceholder.typicode.com/'
  }

  getData(type){
    return this.http.get(this.url+type)
      .map(res => res.json())
  }
}
