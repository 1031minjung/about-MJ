import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private userId = 'L51Xq3wapi3tbwIIB'; // Replace with your EmailJS User ID

  constructor() { }

  sendEmail(emailData: { to_email: string; subject: string; message: string }): Promise<EmailJSResponseStatus> {
    const serviceId = 'service_fnvm9nv'; // Replace with your EmailJS Service ID
    const templateId = 'template_rhl0ih8'; // Replace with your EmailJS Template ID

    return emailjs.send(serviceId, templateId, emailData, this.userId);
  }
}
