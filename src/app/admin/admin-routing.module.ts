import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  AuthComponent
} from '@app/admin/auth/auth.component';
import {
  OrderTableComponent
} from '@app/admin/order.table/order.table.component';
import {
  ProductEditorComponent
} from '@app/admin/product.editor/product.editor.component';
import {
  ProductTableComponent
} from '@app/admin/product.table/product.table.component';
import {
  AuthGuard
} from '@app/guards/auth.guard';
import {
  AdminComponent
} from './admin.component';

const routes: Routes = [
  {
    path: 'auth', component: AuthComponent,
    data: { title: 'Log In' }
  },
  {
    path: 'dashboard', component: AdminComponent, canActivate: [AuthGuard],
    children: [
      {
        path: 'products/:mode/:id', component: ProductEditorComponent,
        data: { title: 'Admin Product Manager' }
      },
      {
        path: 'products/:mode', component: ProductEditorComponent,
        data: { title: 'Admin Product Manager' }
      },
      {
        path: 'products', component: ProductTableComponent,
        data: { title: 'Admin Products' }
      },
      {
        path: 'orders', component: OrderTableComponent,
        data: { title: 'Admin Orders' }
      },
      {
        path: '**', redirectTo: 'products'
      }
    ]
  },
  {
    path: '**', redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AdminRoutingModule { }
