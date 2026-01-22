import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css']
})
export class EmployeeListComponent {
  employees = [
    { id: 1, name: 'Anu', role: 'Developer', department: 'IT', salary: 30000 },
    { id: 2, name: 'Rahul', role: 'Tester', department: 'QA', salary: 25000 },
    { id: 3, name: 'Meera', role: 'Manager', department: 'HR', salary: 50000 }
  ];
}

