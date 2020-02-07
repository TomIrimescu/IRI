import {
  NgModule
} from '@angular/core';
import {
  ProductRepository
} from '@app/model/product.repository';
import {
  StaticDataSource
} from '@app/model/static.datasource';

@NgModule({
  providers: [
    ProductRepository,
    StaticDataSource
  ]
})
export class ModelModule { }
