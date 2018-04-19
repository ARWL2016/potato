import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: []
})

export class ResultsComponent implements OnInit {

  constructor(private data: DataService) {}

  tags: String = '----*&^$@%*)#';

  ngOnInit() {
    console.log('INIT');
    this.data
      .getFlickrFeed(this.tags)
      .subscribe(data => {
        console.log(data);
      }, err => console.log(err));
  }
}

