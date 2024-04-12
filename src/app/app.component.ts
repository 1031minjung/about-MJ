import { Component, OnInit } from '@angular/core';
import { jobSummary, educationSummary } from './summary';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  jobData: any;
  educationData: any;

  constructor(public appService: AppService) {}

  ngOnInit() {
    this.jobData = jobSummary;
    this.educationData = educationSummary;
  }

  toggleDisplay(event: Event) {
    if (event) {
      this.appService.displayMode = 'dark'
    } else {
      this.appService.displayMode = 'bright'
    }
  }
}
