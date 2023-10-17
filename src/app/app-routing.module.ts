import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';

const routes: Routes = [
  {path:'', redirectTo: '/login',pathMatch: 'full'},
  { path: 'login',component: LoginComponent},

  {path:'login',component:LoginComponent,children:[

  { path: 'employees', component: EmployeesListComponent}, //user & admin
  { path:'employees/add',component:AddEmployeeComponent}, //user & admin
  { path:'employees/edit/:id',component:EditEmployeeComponent} //admin
  ]
  },
  {path:'singup',component: SingupComponent,children:[
    
    { path: 'employees', component: EmployeesListComponent}, //user & admin
    { path:'employees/add',component:AddEmployeeComponent}, //user & admin


  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
