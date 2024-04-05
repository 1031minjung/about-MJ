import { Component, OnInit } from '@angular/core';
import { jobSummary } from './summary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  jobData: any;

  constructor() {}

  ngOnInit() {
    this.jobData = jobSummary;
  }
  
}
