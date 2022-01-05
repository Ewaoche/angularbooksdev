import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Employee } from '../model/employee.model';

declare var M: any;
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.scss']
})
export class ListbooksComponent implements OnInit {

  obj = {
    id: "",
    name: "",
    status: "",
    salary: null,
    isbn:null,
    title:"",
    author:"",
  };
    constructor(public employeeService: BookService, private router:Router) { }
  
    mydatas:any = [];
  
   ngOnInit() {
    // this.getAlldata();
      // this.resetForm();
      this.refreshEmployeeList();
    }
  
    // resetForm(form?: NgForm) {
    //   if (form)
    //     form.reset();
    //   this.employeeService.selectedEmployee = {
    //     id: "",
    //     name: "",
    //     status: "",
    //     salary: null,
    //     isbn:null,
    //     title:"",
    //     author:"",
    //   }
    // }
  
  //   getAlldata(){
  // this.employeeService.getEmployeeList().subscribe( data => {
  //   console.log(data);
  //   this.mydatas = data;
    
  // })
  //   }
    onSubmit() {
         this.employeeService.postEmployee(this.obj).subscribe((res) => {
          // console.log(form.value);
          // console.log(form.value);
          // this.resetForm(form);
          console.log(this.obj);
          M.toast({ html: 'Saved successfully', classes: 'rounded' });
          this.router.navigate(['/viewbooks']);

        });
  
      // if (form.value._id < 5) {
      //   this.employeeService.postEmployee(form.value).subscribe((res) => {
      //     console.log(form.value);
      //     console.log(form.value);
      //     this.resetForm(form);
      //     this.refreshEmployeeList();
      //     M.toast({ html: 'Saved successfully', classes: 'rounded' });
      //   });
      // }
      // else {
      //   this.employeeService.putEmployee(form.value).subscribe((res) => {
      //     this.resetForm(form);
      //     this.refreshEmployeeList();
      //     M.toast({ html: 'Updated successfully', classes: 'rounded' });
      //   });
      // }
    }
  
    refreshEmployeeList() {
      this.employeeService.getEmployeeList().subscribe((res) => {
        this.employeeService.employees = res as Employee[];
      });
    }
  
    onEdit(id) {
      console.log(id)
      // this.employeeService.selectedEmployee = emp;
      this.employeeService.getSingleEmployee(id).subscribe(data => {
        // console.log(data);
        this.mydatas = data;
      
      });
    }
  
    onDelete(_id: string, form: NgForm) {
      if (confirm('Are you sure to delete this record ?') == true) {
        this.employeeService.deleteEmployee('id').subscribe((res) => {
          this.refreshEmployeeList();
          // this.resetForm(form);
          M.toast({ html: 'Deleted successfully', classes: 'rounded' });
        });
      }
    }
  

}
