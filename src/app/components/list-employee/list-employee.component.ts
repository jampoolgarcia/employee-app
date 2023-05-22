import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeI } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { MsgConfirmComponent } from 'src/app/shared/msg-confirm/msg-confirm.component';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements AfterViewInit  {

  public displayedColumns: string[] = ['fullname', 'phone', 'email', 'dateIn', 'civilStatus', 'sex', 'actions'];
  public dataSource!: MatTableDataSource<EmployeeI>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _service: EmployeeService, 
      public dialog: MatDialog,
      private _snackBar: MatSnackBar) {

  }

  ngAfterViewInit() {
    this.fillEmployee();
  } 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  fillEmployee(){
    this._service.findAll().subscribe(
      res =>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

  openDialog(id: number) {
    this.dialog.open(MsgConfirmComponent, {
      width: '300px',
      data: {msg: 'Are you sure you want to delete the employee?'}
    }).afterClosed().subscribe(res => {
      if(res)
        this.delete(id);

    });
  }

  

  // edit(record: EmployeeI, id: number){
  //   this._service.update(record, id).subscribe(
  //     res =>{
  //       alert('Update successfull...');
  //     }
  //   )
  // }

  private delete(id: number){
    this._service.delete(id).subscribe(
      res =>{
        this.fillEmployee(); 
        this._snackBar.open('Deleted successfull...', '', {
          duration: 3000
        });
      }
    );
  }
}

