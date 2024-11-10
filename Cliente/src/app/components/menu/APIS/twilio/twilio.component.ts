// twilio.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-twilio',
  templateUrl: './twilio.component.html',
  styleUrls: ['./twilio.component.css']
})
export class TwilioComponent {
  phoneNumber: string = '';
  message: string = '';
  alertMessage: string = '';
  alertType: 'success' | 'error' | null = null;

  constructor(private http: HttpClient) {}

  sendWhatsAppMessage() {
    const twilioUrl = 'https://api.twilio.com/2010-04-01/Accounts/ACa4cb87422c9be5386f235241c9eaad29/Messages.json';
    const twilioAccountSid ='ACa4cb87422c9be5386f235241c9eaad29';
    const twilioAuthToken = '06761fc54454ef9ab7857fb00307c3c6';

    const formData = new FormData();
    formData.append('From', 'whatsapp:+14155238886');
    formData.append('To', `whatsapp:+${this.phoneNumber}`);
    formData.append('Body', this.message);

    this.http.post(twilioUrl, formData, {
      headers: {
      'Authorization': 'Basic ' + btoa(`${twilioAccountSid}:${twilioAuthToken}`)
      }
    }).subscribe(
      (response) => {
        console.log('WhatsApp message sent successfully:', response);
        this.alertMessage = 'Mensaje enviado correctamente.';
        this.alertType = 'success';
      },
      (error) => {
        console.error(  'Error sending WhatsApp message:', error);
        this.alertMessage = 'Error al enviar el mensaje. Por favor, verifica el número y vuelve a intentarlo.';
        this.alertType = 'error';
      }
    );
  }

  closeAlert() {
    this.alertMessage = '';
    this.alertType = null;
  }
}
