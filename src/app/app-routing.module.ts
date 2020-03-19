import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  ExternalApiComponent
} from '@app/external-api-test/external-api/external-api.component';
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
    path: 'external-api', component: ExternalApiComponent,
    data: { title: 'Ping IRI-API' }
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
