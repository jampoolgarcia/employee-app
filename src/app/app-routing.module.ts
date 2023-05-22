import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEmployeeComponent } from './components/form-employee/form-employee.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';

const routes: Routes = [
  { path: 'add', component: FormEmployeeComponent },
  { path: '', component: ListEmployeeComponent },
  { path: 'update/:id', component: FormEmployeeComponent },
  { path: '**', redirectTo: '/' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
