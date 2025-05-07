import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthserviceService } from './authservice.service';
import { roleGuard } from './guard/role.guard';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
    canActivate: [roleGuard],
    data: {
      expectedRole: 'user',
    },
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
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
