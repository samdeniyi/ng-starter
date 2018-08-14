import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {TranslateModule} from '@ngx-translate/core';
import {UsersRoutingModule} from '@app/users/users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    UsersRoutingModule
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }
