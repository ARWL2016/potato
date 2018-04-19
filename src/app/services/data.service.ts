import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class DataService {

  private baseUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?';

  constructor(private http: Http) {}

  getFlickrFeed(options) {
    console.log('GET');
    const { query } = options;
    const url = `${this.baseUrl}?tags=${query}`;

    return this.http.get(url)
      .map(res => res.json())
      .do(results => console.log(results));
  }
}

// https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json
