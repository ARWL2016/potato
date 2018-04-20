import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: []
})

export class ResultsComponent implements OnInit {

  tags: String = 'potato';
  photos = [];
  constructor(private data: DataService) {}

  ngOnInit() {
    console.log('INIT');
    this.data
      .getFlickrFeed(this.tags)
      .subscribe(photos => {
        this.photos = photos;
      }, err => console.log(err));
  }
}

