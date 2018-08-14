import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Route } from '@app/core';

const routes: Routes = [
  Route.withShell([
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
    { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
    { path: 'transactions', loadChildren: 'app/transactions/transactions.module#TransactionsModule' },
    { path: 'customers', loadChildren: 'app/customers/customers.module#CustomersModule' },
    {path: 'users', loadChildren: 'app/users/users.module#UsersModule'},
    {path: 'settings', loadChildren: 'app/settings/settings.module#SettingsModule'}
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
