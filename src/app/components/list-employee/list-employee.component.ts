import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeI } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements AfterViewInit  {

  public displayedColumns: string[] = ['fullName', 'phone', 'email', 'dateIn', 'civilStatus', 'sex', 'actions'];
  public dataSource!: MatTableDataSource<EmployeeI>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _service: EmployeeService) {

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

  

  // edit(record: EmployeeI, id: number){
  //   this._service.update(record, id).subscribe(
  //     res =>{
  //       alert('Update successfull...');
  //     }
  //   )
  // }

  delete(id: number){
    this._service.delete(id).subscribe(
      res =>{
        alert('Deleted successfull...');
        this.fillEmployee(); 
      }
    );
  }
}

