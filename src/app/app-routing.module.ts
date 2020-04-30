import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  StoreGuard
} from '@app/guards/store.guard';
import {
  CartDetailComponent
} from '@app/store/cart.detail/cart.detail.component';
import {
  CheckoutComponent
} from '@app/store/checkout/checkout.component';
import {
  StoreRouteResolver
} from '@app/store/store-route.resolver';
import {
  StoreComponent
} from '@app/store/store.component';
import { CrudTestComponent } from './graphql/crud-test/crud-test.component';

const routes: Routes = [
  {
    path: 'store', component: StoreComponent,
    canActivate: [StoreGuard],
    resolve: { message: StoreRouteResolver },
    data: { title: 'IRI Store' }
  },
  {
    path: 'cart', component: CartDetailComponent,
    canActivate: [StoreGuard],
    data: { title: 'IRI Cart' }
  },
  {
    path: 'checkout', component: CheckoutComponent,
    canActivate: [StoreGuard],
    data: { title: 'IRI Checkout' }
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule)
  },
  {
    path: 'crud', component: CrudTestComponent
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
  providers: [
    StoreGuard,
    StoreRouteResolver
  ]
})
export class AppRoutingModule { }
