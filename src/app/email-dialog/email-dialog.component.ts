import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmailService } from './email.service'

@Component({
  selector: 'app-email-dialog',
  templateUrl: './email-dialog.component.html',
  styleUrls: ['./email-dialog.component.scss']
})
export class EmailDialogComponent {

  emailStatus: string;
  errorMessage = '';
  successMessage: string;
  isEmailValid: boolean;

  constructor(
    public activeModal: NgbActiveModal,
    private emailService: EmailService
  ) { }

  sendEmailToMJ(emailAddress: string, emailMessage: string) {
    this.emailService.sendEmail({ 
      to_email: emailAddress, 
      subject: 'hallo', 
      message: emailMessage + '\n\n from ' + emailAddress })
      .then(_ => {
        this.emailStatus = 'successful'
        this.successMessage = 'The email has been sent successfully!';
        setTimeout(() => {
          this.activeModal.close();
        }, 5000);
      })
      .catch(_ => {
        this.emailStatus = 'fail'
        this.errorMessage = 'Sorry, something went wrong.'
      });
  }

  isValidEmail(emailAddress: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailAddress)) {
      this.errorMessage = '';
      this.isEmailValid = true;
    } else {
      this.errorMessage = 'Invalid Email Address';
      this.isEmailValid = false;
    }
  }

}
