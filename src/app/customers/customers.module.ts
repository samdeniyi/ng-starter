import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import {TranslateModule} from '@ngx-translate/core';
import {CustomersRoutingModule} from '@app/customers/customers-routing.module';

@NgModule({
  imports: [
    CommonModule,
      TranslateModule,
      CustomersRoutingModule
  ],
  declarations: [CustomersComponent]
})
export class CustomersModule { }
