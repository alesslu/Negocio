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
import { ProgressComponent } from './progress/progress.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';


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
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TransactionsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
