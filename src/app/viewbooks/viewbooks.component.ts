import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.scss']
})
export class ViewbooksComponent implements OnInit {
  myviewdatas:any = [];

  constructor(public employeeService: BookService, private router:Router ) { }

  ngOnInit(): void {
    this.getAlldata();
  }

  onEdit(id:any){
    this.router.navigate(["tweet/" + id +  "/edit"]);
   }

    getAlldata(){
this.employeeService.getEmployeeList().subscribe( data => {
  console.log(data);
  this.myviewdatas = data;
  
})
  }
}
