import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-editbooks',
  templateUrl: './editbooks.component.html',
  styleUrls: ['./editbooks.component.scss']
})
export class EditbooksComponent implements OnInit {
  obj = {
    id: null,
  
    isbn:null,
    title:"",
  };
  BookDatas:any;
  id:any = null;
    constructor(private activatedroute:ActivatedRoute, private httpservice:BookService, private router:Router) { }
  
    ngOnInit(): void {
      this.getDataToEdit();
    }

    updateTweet(){
      // console.log(this.obj);
      // this.obj.id = this.obj.id;
        this.httpservice.updateTweet(this.obj.id, this.obj).subscribe(data =>{
          console.log(this.id);
          this.router.navigate(['/tweets']);
        });
    
    
    }
  
    updateBook(){
    // console.log(this.obj);
      this.httpservice.putEmployee( this.obj).subscribe(data =>{
        console.log(data);
        this.router.navigate(['/viewbooks']);
      });
  
  
  }
  
  getDataToEdit(){
    this.activatedroute.params.subscribe(res => {
      this.obj.id = res['id'];
      // console.log(this.id);
      this.httpservice.getSingleEmployee(this.obj.id).subscribe(res => {
        console.log(res);
        this.BookDatas = res;
        this.obj.title = this.BookDatas.title;
        this.obj.isbn = this.BookDatas.isbn;
      });
    });
  }
}
