import {
  HttpClientModule
} from '@angular/common/http';
import {
  NgModule
} from '@angular/core';
import {
  ProductRepository
} from '@app/model/product.repository';

import {
  AuthService
} from '@app/admin/auth/auth.service/auth.service';
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
