import { Injectable } from '@angular/core';
import { EmployeeI } from '../models/employee';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public url = "http://localhost:3000/Employees"

  constructor(private _http: HttpClient) { }

  
  create(record: EmployeeI){
    return this._http.post<EmployeeI>(this.url, record);
  }

  update(record: EmployeeI, id: number){
    return this._http.put<EmployeeI>(`${this.url}/${id}`, record);
  }

  findAll(){
    return this._http.get<EmployeeI[]>(this.url);
  }

  findOne(id: number){
    return this._http.get<EmployeeI>(`${this.url}/${id}`);
  }

  delete(id: number){
    return this._http.delete<EmployeeI[]>(`${this.url}/${id}`);
  }

}
