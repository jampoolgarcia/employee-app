import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeI } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.scss']
})
export class FormEmployeeComponent implements OnInit {

  public sex = ['Male', 'Female', 'Other'];
  public civilStatus = ['Single', 'Married', 'Free', 'Separate', 'Divorced', 'Widower'];
  public form!: FormGroup;
  public id!: number;
  public loading = false;

  constructor(private _router: Router, private aRouter: ActivatedRoute, private _snackBar: MatSnackBar, private fb: FormBuilder, private _service: EmployeeService) { 
    this.id = aRouter.snapshot.params['id'];
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
    }else{
      this.update(em);
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

  private update(record: EmployeeI){
    this._service.update(record, this.id).subscribe(
      res => {
        this.form.reset();
        this.loading = false;
        this._snackBar.open('Update successfull...', '', {
          duration: 1500
        });
        this._router.navigate(['/']);
      }
    )
  }

  ngOnInit(): void {
    if(this.id){
     
      this._service.findOne(this.id).subscribe(
        res =>{
          this.form.patchValue(res);
        } 
          

      )
    } 
      
  }

}
