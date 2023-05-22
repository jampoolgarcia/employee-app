import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.scss']
})
export class FormEmployeeComponent implements OnInit {

  public sex = ['male', 'female', 'other'];
  public civilState = ['single', 'married', 'free', 'separate', 'divorced', 'widower'];

  constructor() { }

  ngOnInit(): void {
  }

}
