import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import {CustomersComponent} from '@app/customers/customers.component';

const routes: Routes = [
    // Module is lazy loaded, see app-routing.module.ts
    { path: '', component: CustomersComponent, data: { title: extract('Customers') } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class CustomersRoutingModule { }
