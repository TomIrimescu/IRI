import {
  HttpClientModule
} from '@angular/common/http';
import {
  NgModule
} from '@angular/core';
import {
  AuthService
} from '@app/admin/auth/auth.service/auth.service';
import {
  ProductRepository
} from '@app/models/product/product.repository';
import {
  RestDataSource
} from './rest.datasource';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ProductRepository,
    RestDataSource,
    AuthService
  ]
})
export class ModelModule { }
