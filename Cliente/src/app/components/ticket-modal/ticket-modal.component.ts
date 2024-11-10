import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface TicketData {
  transactionId: string;
  date: Date;
  amount: string;
  customerName: string;
}

@Component({
  selector: 'app-ticket-modal',
  templateUrl: './ticket-modal.component.html',
  styleUrls: ['./ticket-modal.component.css']
})
export class TicketModalComponent {
  constructor(
    public dialogRef: MatDialogRef<TicketModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TicketData
  ) {}

  printTicket(): void {
    window.print();
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
