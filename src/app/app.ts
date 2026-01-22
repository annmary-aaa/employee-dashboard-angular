import { Component } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar';
import { EmployeeListComponent } from './components/employee-list/employee-list';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
}




