import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import {TranslateModule} from '@ngx-translate/core';
import {TransactionsRoutingModule} from '@app/transactions/transactions-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    TransactionsRoutingModule
  ],
  declarations: [TransactionsComponent]
})
export class TransactionsModule { }
