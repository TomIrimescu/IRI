import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
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
  AdminComponent
} from './admin.component';

const routes: Routes = [
  // {
  //   path: 'auth', component: AuthComponent,
  //   data: { title: 'Log In' }
  // },
  {
    path: 'dashboard', component: AdminComponent,
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
  // {
  //   path: '**', redirectTo: 'auth'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
