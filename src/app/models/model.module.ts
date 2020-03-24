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
  StoreService
} from './store.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ProductRepository,
    StoreService,
    AuthService
  ]
})
export class ModelModule { }
