import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class DataService {

  private baseUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?';
  private key = 'f345707d395f08728388c3474bc43096';

  constructor(private http: Http) {}

  getFlickrFeed(tags) {
    return this.http.get(`/api/data?tags=${tags}`);
  }
}

