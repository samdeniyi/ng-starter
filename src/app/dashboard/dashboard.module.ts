import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {DashboardComponent} from '@app/dashboard/dashboard.component';
import {DashboardRoutingModule} from '@app/dashboard/dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
