import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookService } from './services/book.service';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { EditbooksComponent } from './editbooks/editbooks.component';



@NgModule({
  declarations: [
    AppComponent,
    ListbooksComponent,
    ViewbooksComponent,
    EditbooksComponent
   



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
