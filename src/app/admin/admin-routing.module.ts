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
  AuthGuard
} from '@app/auth/authguard/auth.guard';
import {
  AdminComponent
} from './admin.component';

const routes: Routes = [
  {
    path: 'dashboard', component: AdminComponent, canActivate: [AuthGuard], data: { title: 'Admin' },
    children: [
      { path: 'products/:mode/:id', component: ProductEditorComponent, data: { title: 'Product Editor' } },
      { path: 'products/:mode', component: ProductEditorComponent, data: { title: 'Product Editor' } }, // FIX :mode
      { path: 'products', component: ProductTableComponent, data: { title: 'Product Table' } },
      { path: 'orders', component: OrderTableComponent, data: { title: 'Order Table' } },
      { path: '**', redirectTo: 'products' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AdminRoutingModule { }
