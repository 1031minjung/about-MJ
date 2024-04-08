import { Component, EventEmitter, Output } from '@angular/core';
import { AppService } from '../app.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmailDialogComponent } from '../email-dialog/email-dialog.component';


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {

  isDarkMode = true;
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

}
