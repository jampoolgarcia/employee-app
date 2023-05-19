import { Injectable } from '@angular/core';
import { EmployeeI } from '../models/employee';

let records: EmployeeI[] = [
  {
    id: 1,
    fullName: "John Smith",
    phone: "1234567890",
    email: "johnsmith@example.com",
    dateIn: new Date("2023-05-19"),
    civilStatus: "Single",
    sex: "Male"
  },
  {
    id: 2,
    fullName: "Jane Johnson",
    phone: "0987654321",
    email: "janejohnson@example.com",
    dateIn: new Date("2023-05-19"),
    civilStatus: "Married",
    sex: "Female"
  },
  {
    id: 3,
    fullName: "David Williams",
    phone: "5555555555",
    email: "davidwilliams@example.com",
    dateIn: new Date("2023-05-19"),
    civilStatus: "Single",
    sex: "Male"
  },
  {
    id: 4,
    fullName: "Maria Brown",
    phone: "7777777777",
    email: "mariabrown@example.com",
    dateIn: new Date("2023-05-19"),
    civilStatus: "Single",
    sex: "Female"
  },
  {
    id: 5,
    fullName: "Michael Jones",
    phone: "1111111111",
    email: "michaeljones@example.com",
    dateIn: new Date("2023-05-19"),
    civilStatus: "Married",
    sex: "Male"
  },
  {
    id: 6,
    fullName: "Emily Miller",
    phone: "2222222222",
    email: "emilymiller@example.com",
    dateIn: new Date("2023-05-19"),
    civilStatus: "Single",
    sex: "Female"
  },
  {
    id: 7,
    fullName: "Robert Davis",
    phone: "3333333333",
    email: "robertdavis@example.com",
    dateIn: new Date("2023-05-19"),
    civilStatus: "Single",
    sex: "Male"
  },
  {
    id: 8,
    fullName: "Sarah Garcia",
    phone: "4444444444",
    email: "sarahgarcia@example.com",
    dateIn: new Date("2023-05-19"),
    civilStatus: "Married",
    sex: "Female"
  },
  {
    id: 9,
    fullName: "Daniel Wilson",
    phone: "6666666666",
    email: "danielwilson@example.com",
    dateIn: new Date("2023-05-19"),
    civilStatus: "Single",
    sex: "Male"
  },
  {
    id: 10,
    fullName: "Linda Anderson",
    phone: "9999999999",
    email: "lindaanderson@example.com",
    dateIn: new Date("2023-05-19"),
    civilStatus: "Single",
    sex: "Female"
  },
  {
    id: 11,
    fullName: "Steven Brown",
    phone: "5551111111",
    email: "stevenbrown@example.com",
    dateIn: new Date("2023-05-19"),
    civilStatus: "Single",
    sex: "Male"
  },
  {
    id: 12,
    fullName: "Jessica Taylor",
    phone: "5552222222",
    email: "jessicataylor@example.com",
    dateIn: new Date("2023-05-19"),
    civilStatus: "Married",
    sex: "Female"
  },
  {
    id: 13,
    fullName: "Thomas Martin",
    phone: "5553333333",
    email: "thomasmartin@example.com",
    dateIn: new Date("2023-05-19"),
    civilStatus: "Single",
    sex: "Male"
  },
  {
    id: 14,
    fullName: "Sophia Adams",
    phone: "5554444444",
    email: "sophiaadams@example.com",
    dateIn: new Date("2023-05-19"),
    civilStatus: "Single",
    sex: "Female"
  },
  {
    id: 15,
    fullName: "Matthew Thompson",
    phone: "5556666666",
    email: "matthewthompson@example.com",
    dateIn: new Date("2023-05-19"),
    civilStatus: "Single",
    sex: "Male"
  }
];



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList: EmployeeI[] = records;

  constructor() { }

  findAll(){
    return this.employeeList.slice();
  }
}
