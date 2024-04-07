import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-email-dialog',
  templateUrl: './email-dialog.component.html',
  styleUrls: ['./email-dialog.component.scss']
})
export class EmailDialogComponent {

  emailStatus = null;
  error = null;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    console.log("email Dialog Open");
  }

  sendEmailToMJ() {
    console.log("*** sendEmailToMJ()")
    this.activeModal.close();
  }

  submitForm() {
    console.log("*** submitForm()")
    this.activeModal.close();
  }
}
