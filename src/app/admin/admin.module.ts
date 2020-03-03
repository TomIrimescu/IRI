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
} from '@app/admin/orderTable/orderTable.component';
import {
  ProductEditorComponent
} from '@app/admin/productEditor/productEditor.component';
import {
  ProductTableComponent
} from '@app/admin/productTable/productTable.component';
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
