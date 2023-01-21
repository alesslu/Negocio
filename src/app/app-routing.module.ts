import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetsComponent } from './budgets/budgets.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionsMasterComponent } from './transactions/transactions-master/transactions-master.component';

const routes: Routes = [
    {
      path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
      path: 'home',component: HomeComponent, canActivate: [AuthGuard]
    },
    { 
      path: 'transaction', component: TransactionsMasterComponent, canActivate: [AuthGuard]
    },
    {
      path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard]
    },
    {
      path: 'budgets', component: BudgetsComponent, canActivate: [AuthGuard]
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
  