import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  OrderTableComponent
} from '@app/admin/orderTable/orderTable.component';
import {
  ProductEditorComponent
} from '@app/admin/productEditor/productEditor.component';
import {
  ProductTableComponent
} from '@app/admin/productTable/productTable.component';
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
