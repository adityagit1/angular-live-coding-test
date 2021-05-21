import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-email-diloag',
  templateUrl: './email-diloag.component.html',
  styleUrls: ['./email-diloag.component.scss'],
})
export class EmailDiloagComponent implements OnInit {
  emailId: any;

  constructor(
    private dialogRef: MatDialogRef<EmailDiloagComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.emailId = data.email;
  }

  ngOnInit(): void {}

  closeDialog() {
    this.dialogRef.close({ event: 'close' });
  }
}
