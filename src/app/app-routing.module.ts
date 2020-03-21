import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  CartDetailComponent
} from '@app/store/cart.detail/cart.detail.component';
import {
  CheckoutComponent
} from '@app/store/checkout/checkout.component';
import {
  StoreComponent
} from '@app/store/store.component';

const routes: Routes = [
  {
    path: 'store', component: StoreComponent,
    data: { title: 'IRI Store' }
  },
  {
    path: 'cart', component: CartDetailComponent,
    data: { title: 'IRI Cart' }
  },
  {
    path: 'checkout', component: CheckoutComponent,
    data: { title: 'IRI Checkout' }
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule),
  },
  {
    path: '**', redirectTo: 'store', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
