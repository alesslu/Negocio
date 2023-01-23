import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ModalComponent } from './modal/modal.component';
import { TransactionsModule } from './transactions/transactions.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { BudgetsComponent } from './budgets/budgets.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptors';
import { TransactionshomeComponent } from './transactionshome/transactionshome.component';
import { CategorieshomeComponent } from './categorieshome/categorieshome.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ModalComponent,
    HomeComponent,
    BudgetsComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    TransactionshomeComponent,
    CategorieshomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TransactionsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
