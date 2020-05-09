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
  RouterModule
} from '@angular/router';
import { GraphQLModule } from '@app/graphql/graphql.module';
import {
  ModelModule
} from '@app/models/model.module';
import {
  CartDetailComponent
} from '@app/store/cart.detail/cart.detail.component';
import {
  CartSummaryComponent
} from '@app/store/cart.summary/cart.summary.component';
import {
  CheckoutComponent
} from '@app/store/checkout/checkout.component';
import {
  StoreComponent
} from '@app/store/store.component';
import {
  ClickOutsideModule
} from 'ng-click-outside';

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ClickOutsideModule,
    GraphQLModule
  ],
  declarations: [
    StoreComponent,
    CartDetailComponent,
    CartSummaryComponent,
    CheckoutComponent
  ],
  exports: [StoreComponent]
})

export class StoreModule { }
