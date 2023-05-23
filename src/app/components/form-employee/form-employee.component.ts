import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeI } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.scss']
})
export class FormEmployeeComponent implements OnInit {

  public sex = ['male', 'female', 'other'];
  public civilStatus = ['single', 'married', 'free', 'separate', 'divorced', 'widower'];
  public form!: FormGroup;
  public id!: number;
  public loading = false;

  constructor(private _snackBar: MatSnackBar, private fb: FormBuilder, private _service: EmployeeService) { 
    this.buildingForm();
  }

  buildingForm(){
    this.form = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateIn: ['', Validators.required],
      phone: ['', Validators.required],
      civilStatus: ['', Validators.required],
      sex: ['', Validators.required]
    });
  }

  onSubmit(em: EmployeeI){
    this.loading = true;
    if(!this.id){
      this.save(em);
    }
  }

  private save(record: EmployeeI){

    this._service.create(record).subscribe(
      res => {
        this.form.reset();
        this.loading = false;
        this._snackBar.open('Create successfull...', '', {
          duration: 1500
        });
        
      }
    )
  }

  ngOnInit(): void {
    
  }

}
