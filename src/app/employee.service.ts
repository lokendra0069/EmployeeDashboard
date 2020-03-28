import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  toBeUpdatedEmployeeList: Employee;

  private baseUrl = 'http://dummy.restapiexample.com/api/v1';
  private employeeConst = "employees";
  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/employee/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    console.log("Create Employee: ", JSON.stringify(employee));
    return this.http.post(`${this.baseUrl}/create`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    console.log("Updating Employee Record of : ", JSON.stringify(value));
    console.log("Update Url: " , `${this.baseUrl}/update/${id}`);
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    console.log("Delete URL: ", `${this.baseUrl}/delete/${id}`);
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/${this.employeeConst}`);
  }
}
