import {
  ModuleWithProviders,
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
  AuthService
} from '@app/admin/auth/auth.service/auth.service';
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
} from '@app/models/model.module';
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
  exports: [AdminComponent]
})

export class AdminModule {
  static forRoot(): ModuleWithProviders<AdminModule> {
    return {
      ngModule: AdminModule,
      providers: [
        AuthService
      ]
    };
  }
}
