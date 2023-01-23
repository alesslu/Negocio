import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetsComponent } from './budgets/budgets.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionsMasterComponent } from './transactions/transactions-master/transactions-master.component';
import { TransactionshomeComponent } from './transactionshome/transactionshome.component';

const routes: Routes = [
    {
      path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
      path: 'login',component: LoginComponent
    },
    {
      path: 'register', component: RegisterComponent
    },
    {
      path: 'home',
      component: HomeComponent,
      canActivate: [AuthGuard],
      children: [
        { 
          path: 'transaction', component: TransactionshomeComponent
        },
        {
          path: 'categories', component: CategoriesComponent
        },
        {
          path: 'budgets', component: BudgetsComponent
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  