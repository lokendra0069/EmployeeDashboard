import { EmployeeDetailsComponent } from './../employee-details/employee-details.component';
import { Observable } from "rxjs";
import { EmployeeService } from "./../employee.service";
import { Employee } from "./../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;
  EmployeesTempList: Employee[];
  tempAry: any;
  query: string;
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  returnedArray: string[];


  ngOnInit() {
    this.reloadData();
    this.tempAry = this.employees;
    this.employeeService.getEmployeesList()
      .subscribe(result => {
        if (!result) {
          return;
        }
        this.tempAry = result['data'];
        this.returnedArray = this.tempAry.slice(0, 10);
      })
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.tempAry.slice(startItem, endItem);
  }

  OpenModelEmployee(employee: any) {
    this.EmployeesTempList = employee;
    console.log("Details: ");

  }
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(employeePojo: any) {
    console.log("Editing Details of :", employeePojo.id);
    this.employeeService.toBeUpdatedEmployeeList = employeePojo;
    this.router.navigate(['/update', employeePojo.id]);
  }
}
