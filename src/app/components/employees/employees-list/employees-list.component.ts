import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [  
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    phone: 5555555555,
    salary: 50000,
    department: "Sales"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: 5555555556,
    salary: 60000,
    department: "Marketing"
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    phone: 5555555557,
    salary: 70000,
    department: "Engineering"
  },
  {
    id: 4,
    name: "Samantha Williams",
    email: "samanthawilliams@example.com",
    phone: 5555555558,
    salary: 80000,
    department: "Operations"
  },
  {
    id: 5,
    name: "Tom Davis",
    email: "tomdavis@example.com",
    phone: 5555555559,
    salary: 90000,
    department: "Finance"
  },
  {
    id: 6,
    name: "Emily Brown",
    email: "emilybrown@example.com",
    phone: 5555555560,
    salary: 100000,
    department: "Human Resources"
  },
  {
    id: 7,
    name: "Alex Rodriguez",
    email: "alexrodriguez@example.com",
    phone: 5555555561,
    salary: 110000,
    department: "Sales"
  },
  {
    id: 8,
    name: "Michelle Lee",
    email: "michellelee@example.com",
    phone: 5555555562,
    salary: 120000,
    department: "Marketing"
  },
  {
    id: 9,
    name: "David Kim",
    email: "davidkim@example.com",
    phone: 5555555563,
    salary: 130000,
    department: "Engineering"
  },
  {
    id: 10,
    name: "Sarah Chen",
    email: "sarahchen@example.com",
    phone: 5555555564,
    salary: 140000,
    department: "Operations"
  }
];

  constructor() { }

  ngOnInit(): void {

  }

}
