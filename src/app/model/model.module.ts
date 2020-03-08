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
  StaticDataSource
} from '@app/model/static.datasource';
import {
  RestDataSource
} from './rest.datasource';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ProductRepository,
    { provide: StaticDataSource, useClass: RestDataSource }
  ]
})
export class ModelModule { }
