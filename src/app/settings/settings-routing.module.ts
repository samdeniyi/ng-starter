import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import {SettingsComponent} from '@app/settings/settings.component';
import {RatesComponent} from '@app/settings/rates/rates.component';

const routes: Routes = [
    // Module is lazy loaded, see app-routing.module.ts
    { path: '', component: SettingsComponent, data: { title: extract('Settings') } },
    { path: 'rates', component: RatesComponent, data: { title: extract('Rates') } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class SettingsRoutingModule { }
