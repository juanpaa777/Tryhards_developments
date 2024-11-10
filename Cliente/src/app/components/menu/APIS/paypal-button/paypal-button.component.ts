declare var paypal: any;

import { AfterViewInit, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketModalComponent } from '../../../ticket-modal/ticket-modal.component';

@Component({
  selector: 'app-paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.css']
})
export class PaypalButtonComponent implements AfterViewInit  {
  constructor(private dialog: MatDialog) {}

  ngAfterViewInit(): void {
    this.renderPayPalButton();
  }

  renderPayPalButton(): void {
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '1.00'
            }
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          this.showTicketModal({
            transactionId: details.id,
            date: new Date(),
            amount: details.purchase_units[0].amount.value,
            customerName: details.payer.name.given_name + ' ' + details.payer.name.surname
          });
        });
      },
      onError: (err: any) => {
        console.error('Error in PayPal transaction:', err);
      }
    }).render('#paypal-button-container');
  }

  showTicketModal(ticketData: any): void {
    const dialogRef = this.dialog.open(TicketModalComponent, {
      width: '400px',
      data: ticketData
    });
  }
}
