import { Component, OnInit } from '@angular/core';
import { jobSummary } from './summary';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  jobData: any;

  constructor(public appService: AppService) {}

  ngOnInit() {
    this.jobData = jobSummary;
  }

  openPdfResume() {
    window.open("assets/resume.pdf")
  }
  
}
