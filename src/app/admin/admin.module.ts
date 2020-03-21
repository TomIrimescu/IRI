import {
  NgModule
} from '@angular/core';
import {
  FormsModule
} from '@angular/forms';
import {
  ReactiveFormsModule
} from '@angular/forms';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  AuthComponent
} from '@app/admin/auth/auth.component';
import {
  AuthGuard
} from '@app/admin/auth/authguard/auth.guard';
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
  ModelModule
} from '@app/model/model.module';
import {
  AdminRoutingModule
} from './admin-routing.module';
import {
  AdminComponent
} from './admin.component';
@NgModule({
  declarations: [
    AdminComponent,
    ProductEditorComponent,
    ProductTableComponent,
    OrderTableComponent,
    AuthComponent
  ],
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  exports: [AdminComponent],
  providers: [AuthGuard],
})

export class AdminModule { }
