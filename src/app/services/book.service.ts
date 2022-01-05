import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { Employee } from '../model/employee.model';

@Injectable()
export class BookService {
  selectedEmployee: Employee;
  employees: Employee[];
  // readonly baseURL = 'http://localhost:9000/doctors';
  readonly baseURL = 'http://localhost:5000/books';

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + `/${emp.id}`, emp);
  }

  // putEmployee(id:string, data:any){
  //   return this.http.put(this.baseURL + `/${emp.id}`, data);
  //   }
  getSingleEmployee(emp) {
    return this.http.get(this.baseURL + `/${emp}`);
  }

  updateTweet(id:number, data:any){
    return this.http.put(this.baseURL +`/${id}`, data);
    }
  
  deleteEmployee(id: string) {
    return this.http.delete(this.baseURL + `/${id}`);
  }

}
