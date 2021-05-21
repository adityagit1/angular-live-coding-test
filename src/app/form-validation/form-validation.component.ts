import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EmailDiloagComponent } from '../email-diloag/email-diloag.component';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss'],
})
export class FormValidationComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private _fb: FormBuilder, private dialogRef: MatDialog) {
    this.buildForm();
  }

  /* 
   This Function  is Used to declare the form validation  
   */
  buildForm() {
    this.formGroup = this._fb.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  /*
  This Function is Used to show the Email when user  save the email 
  */
  save() {
    /* This Function is Used to open Dialog and it is Sending the Email inside Dta
     */
    const dialogRef = this.dialogRef.open(EmailDiloagComponent, {
      width: '40%',
      height: '40%',
      data: { email: this.formGroup.value.email },
    });

    /* this will close the Poupup
     */
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
