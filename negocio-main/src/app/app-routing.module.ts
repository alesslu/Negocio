import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetsComponent } from './budgets/budgets.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionsMasterComponent } from './transactions/transactions-master/transactions-master.component';

const routes: Routes = [
    {
      path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
      path: 'home',component: HomeComponent
    },
    { 
      path: 'transaction', component: TransactionsMasterComponent
    },
    {
      path: 'categories', component: CategoriesComponent
    },
    {
      path: 'budgets', component: BudgetsComponent
    },
    {
      path: 'login', component: LoginComponent
    },
    {
      path: 'register', component: RegisterComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  