import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ModalComponent } from './modal/modal.component';
import { TransactionsModule } from './transactions/transactions.module';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TransactionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
