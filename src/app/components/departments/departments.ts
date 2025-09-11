import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments';
import { Observable } from 'rxjs';
import { Department } from '../../interfaces/department';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  standalone: false,
  templateUrl: './departments.html',
  styleUrl: './departments.scss'
})
export class DepartmentsComponent implements OnInit {
  departments: Department[];
  $departments: Observable<Department[]> | undefined;

  constructor(
    private departmentsService: DepartmentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.departmentsService.getDepartments().subscribe(departments => {
      // this.departments = departments;
    // });

    this.$departments = this.departmentsService.getDepartments();
  }

  goToDepartment(departmentId: string): void {
    this.router.navigate(['./timesheet', {id: departmentId}]);
  }
}
