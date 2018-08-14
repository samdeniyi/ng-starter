import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { RatesComponent } from './rates/rates.component';
import { FeesComponent } from './fees/fees.component';
import { MenusComponent } from './menus/menus.component';
import { RolesComponent } from './roles/roles.component';
import { PermissionsComponent } from './permissions/permissions.component';
import {TranslateModule} from '@ngx-translate/core';
import {SettingsRoutingModule} from '@app/settings/settings-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SettingsRoutingModule
  ],
  declarations: [SettingsComponent, RatesComponent, FeesComponent, MenusComponent, RolesComponent, PermissionsComponent]
})
export class SettingsModule { }
