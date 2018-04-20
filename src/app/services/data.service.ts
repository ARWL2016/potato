import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class DataService {

  constructor(private http: Http) {}

  public getFlickrFeed(tags) {
    return this.http.get(`/api/data?tags=${tags}`)
      .map(resp => resp.json())
      .map(data => JSON.parse(data).items);
  }
}

