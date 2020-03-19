import {
  NgModule
} from '@angular/core';
import {
  FormsModule
} from '@angular/forms';
import {
  BrowserModule
} from '@angular/platform-browser';
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
    OrderTableComponent
  ],
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    AdminRoutingModule
  ]
})

export class AdminModule { }
