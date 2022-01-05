import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditbooksComponent } from './editbooks/editbooks.component';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';




const routes: Routes = [
  

  { path:'', component:ListbooksComponent},
  { path:'viewbooks', component:ViewbooksComponent},
  { path:'tweet/:id/edit', component:EditbooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
