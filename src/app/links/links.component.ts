import { Component, EventEmitter, Output } from '@angular/core';
import { AppService } from '../app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmailDialogComponent } from '../email-dialog/email-dialog.component';


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {

  isDarkMode = false;
  @Output() isDisplayDarkMode = new EventEmitter();

  constructor(
    public appService: AppService,
    public modalService: NgbModal
  ) {}

  ngOnInit() {
  }

  openModal() {
    const modalRef = this.modalService.open(EmailDialogComponent, { centered: true });
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
    // modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
    //   console.log(receivedEntry);
    // })
  }

  toggleDisplayMode() {
    this.isDarkMode = !this.isDarkMode;
    this.isDisplayDarkMode.emit(this.isDarkMode);
  }

  openOldPortfolio() {
    alert('Please note:\nA lot of projects are not available for live try in the this old portfolio since the projects were stored and have removed in the school system upon graduation. But you could still visit and view what student MJ has done in the past!');
    this.appService.openLink('https://minjungpark.site123.me/');
  }

}
