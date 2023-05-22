import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface MessageI {
  msg: string;
}

@Component({
  selector: 'app-msg-confirm',
  templateUrl: './msg-confirm.component.html',
  styleUrls: ['./msg-confirm.component.scss']
})
export class MsgConfirmComponent implements OnInit {

  public msg: string;

  constructor(
    public dialogRef: MatDialogRef<MsgConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MessageI,
  ) {
    this.msg = data.msg;
   }

  ngOnInit(): void {
  }

}
