import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthserviceService } from './authservice.service';
import { roleGuard } from './guard/role.guard';
import { CustomersComponent } from './customers/customers.component';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
    // component: CustomersComponent,
    canActivate: [roleGuard],
    data: {
      expectedRole: 'user',
    },
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    // component: AdminComponent,
    canActivate: [roleGuard],
    data: {
      expectedRole: 'admin',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
