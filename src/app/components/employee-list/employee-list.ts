import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css']
})
export class EmployeeListComponent {

  showAdd = false;
  showDelete = false;

  employees = [
    { id: 1, name: 'Anu', role: 'Developer', department: 'IT', salary: 30000 },
    { id: 2, name: 'Rahul', role: 'Tester', department: 'QA', salary: 25000 },
    { id: 3, name: 'Meera', role: 'Manager', department: 'HR', salary: 50000 }
  ];

  newEmployee = {
    name: '',
    role: '',
    department: '',
    salary: 0
  };

  deleteId!: number;

  addEmployee() {
    const id = this.employees.length + 1;
    this.employees.push({ id, ...this.newEmployee });
    this.newEmployee = { name: '', role: '', department: '', salary: 0 };
  }

  deleteEmployee() {
    this.employees = this.employees.filter(emp => emp.id !== this.deleteId);
    this.deleteId = 0;
  }
}


